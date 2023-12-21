import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Searchbar from './SearchBar';
import RecipeCard from './RecipeCard';
import { fetchRecipes } from '../utils';
import Loading from './Loader';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('Vegan');
  const [limit, setLimit] = useState(16);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handlebtn = (value) => {
    setQuery(value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });
      setRecipes(data?.hits);
      setLoading(false);
      console.log(data?.hits)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchedRecipe = (e) => {
    e.preventDefault();
    fetchRecipe();
  };

 
//  const showMore = async () => {
//   try {
//     setLoading(true);

//     // Fetch additional recipes
//     const data = await fetchRecipes({ query, limit: limit + 10 });

//     // Check if there are new recipes
//     if (data?.hits && data.hits.length > 0) {
//       // Use a Set to ensure unique recipes
//       const uniqueRecipes = new Set([...recipes, ...data.hits]);
//       setRecipes([...uniqueRecipes]);
//       setLimit((prev) => prev + 10);
//     }
//   } catch (error) {
//     console.error('Error fetching more recipes:', error);
//   } finally {
//     setLoading(false);
//   }
// };


   const showMore = () => {
        setLimit(prev => prev + 10)
        fetchRecipe()
    }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setLoading(true);
      fetchRecipe();
    }, 1000); // Adjust the delay according to your needs

    return () => clearTimeout(delayDebounceFn);
  }, [query, limit]);

 if (loading) {
    return(
      <div className="h-[50vh]">
        <Loading />
      </div>
    )
  }

  return (
   <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={handleSearchedRecipe}>
          <Searchbar
            placeholder="eg. Cake, Vegan, Chicken"
            handleInputChange={handleChange}
            rightIcon={
              <BiSearchAlt2
                className="text-gray-600"
                onClick={handleSearchedRecipe}
              />
            }
          />
        </form>
      </div>
      <div className="flex flex-row flex-wrap sm:flex-row justify-around items-center pt-5 sm:flex md:flex lg:flex xl:flex">     
       <p
    className=" btn btn-accent hover:bg-[#cde2c1] border-none hover:text-[#272525] m-2 sm:mb-0 sm:mr-3"
    onClick={() => handlebtn("Breakfast")}
  >
    Breakfast
  </p>
  <p
    className="btn btn-accent hover:bg-[#cde2c1] border-none hover:text-[#272525] m-2 sm:mb-0 sm:mr-3"
    onClick={() => handlebtn("Lunch")}
  >
    Lunch
  </p>
  <p
    className="btn btn-accent hover:bg-[#cde2c1] border-none hover:text-[#272525] m-2 sm:mb-0 sm:mr-3"
    onClick={() => handlebtn("Supper")}
  >
    Dinner
  </p>
  <p
    className="btn btn-accent hover:bg-[#cde2c1] border-none hover:text-[#272525] m-2 sm:mb-0 sm:mr-3"
    onClick={() => handlebtn("Sweets")}
  >
    Dessert
  </p>

</div>

            {
                recipes?.length > 0 ? (
                    <>
                        <div className="w-full flex flex-wrap gap-5 text-white justify-center pt-10 pb-5">
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />))
                            }
                       </div>
          <div className="flex w-full items-center justify-center py-10">
            <p className="btn btn-primary" onClick={showMore}> {loading ? 'Loading...' : 'Show More'}</p>
          </div>
        </>
                ) : <div className="indicator text-white w-full items-center justify-center py-8">
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
            }
        </div>
    )
}

export default Recipes
