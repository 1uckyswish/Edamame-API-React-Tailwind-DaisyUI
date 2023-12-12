import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Loader from "./Loader";
import Searchbar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const fetchData = async () => {
    try {
      const data = await fetchRecipes({ query, limit });
      console.log(data?.hits);
      setRecipes(data?.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10 text-white">
        <form className="w-full lg:w-2/4">
          <Searchbar
            placeholder="eg. Enter Food Item, Dietary Preference, Ingredient, Dish"
            handleInputChange={handleChange}
            rightIcon={<BsSearch className="text-gray-600 " />}
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10 text-white">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
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
