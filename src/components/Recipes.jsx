import React, { useEffect, useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import Loader from "./Loader";
import Searchbar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Pizza");
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const lastKeyPressed = useRef("");

  function handleKeyDown(e) {
    lastKeyPressed.current = e.key;
  }

  function handleChange(e) {
    // Clear the previous timeout
    clearTimeout(typingTimeout);

    // Check if the pressed key is "Enter"
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      setQuery(e.target.value.trim());
      fetchData();
    } else {
      // Set a new timeout to wait for the user to finish typing
      const newTimeout = setTimeout(() => {
        setQuery(e.target.value.trim());
        fetchData();
      }, 1000); // Adjust the timeout duration as needed

      setTypingTimeout(newTimeout);
    }
  }

  const fetchData = async () => {
    try {
      const data = await fetchRecipes({ query, limit });
      setRecipes(data?.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    lastKeyPressed.current = ""; // Reset lastKeyPressed
    if (query.trim() !== "") {
      setLoading(true);
      fetchData();
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, [query]); // Empty dependency array ensures it runs only once when the component mounts

  useEffect(() => {
  // Check if the query is not empty and the last key pressed was "Enter"
  if (query.trim() !== "" && lastKeyPressed.current === "Enter") {
    setLoading(true);
    fetchData();
  }
}, [query]);


  const handleCategoryClick = (category) => {
    setQuery(category);
    setLoading(true);
    fetchData();
  };

  if (loading) {
    return(
      <div className="h-[50vh]">
        <Loader />
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10 text-white">
        <form className="w-full lg:w-2/4" onSubmit={handleFormSubmit}>         
         <Searchbar
            placeholder="eg. Enter Food Item, Dietary Preference, Ingredient, Dish"
            handleInputChange={handleChange}
            onKeyDown={handleKeyDown}
            rightIcon={<BsSearch className="text-gray-600 " />}
          />
        </form>
      </div>

      {/* <div tabIndex={0} className="collapse collapse-close border border-base-100 bg-base-300 w-[25%] h-14"> 
  <div className="collapse-title text-xl font-medium text-center pl-16">
    Select Categories
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div> */}

      <div className="flex justify-around items-center pt-5  w-[40%]">
        <button
          className="btn btn-accent"
          onClick={() => handleCategoryClick("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn  btn-accent"
           onClick={() => handleCategoryClick("Lunch")}
        >
          Lunch
        </button>
        <button
          className="btn  btn-accent"
          onClick={() => handleCategoryClick("Supper")}
        >
          Dinner
        </button>
        <button
          className="btn btn-accent"
           onClick={() => handleCategoryClick("Sweets")}
        >
          Dessert
        </button>
        <button
          className="btn  btn-accent"
           onClick={() => handleCategoryClick("Appetizers")}
        >
          Appetizer
        </button>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap gap-5 text-white justify-center pt-10 pb-5">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
          <div className="flex w-full items-center justify-center py-10">
            <button className="btn btn-primary">Show More</button>
          </div>
        </>
      ) : (
        <div className="indicator text-white w-full items-center justify-center py-8">
          <div className="indicator-item indicator-bottom"></div>
          <div className="card border">
            <div className="card-body">
              <h2 className="card-title text-red-400 pl-2">
                Sorry No recipes found
              </h2>
              <p className="">Please Try finding new a Recipe!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipes;
