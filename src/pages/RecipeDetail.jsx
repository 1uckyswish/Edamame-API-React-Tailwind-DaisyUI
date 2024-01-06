import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe, fetchRecipes } from "../utils";
import Loading from "../components/Loader";
import Header from "../components/Header";
import { MdPushPin } from "react-icons/md";
import { PiBowlFoodDuotone } from "react-icons/pi";
import RecipeCard from "../components/RecipeCard";
function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recommend, setRecommend] = useState([]);
  console.log(recommend);

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);

      const data = await fetchRecipe(id);

      setRecipe(data);

      const recommendRecipes = await fetchRecipes({
        query: recipe?.label,
        limit: 8,
      });

      setRecommend(recommendRecipes?.hits?.slice(1, 7));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Header title={recipe?.label} image={recipe?.image} />

      <div className="w-full px-4 lg:px-20 pt-5">
        <div className="flex gap-10 items-center justify-center px-4">
          <div className="flex flex-col justify-between">
            <span className="text-primary text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2">
              {recipe?.calories.toFixed(2)}{" "}
            </span>

            <p className=" text-[12px] md:text-md text-secondary">CALORIES</p>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-primary text-center border border-gray-500 py-1.5 rounded-full mb-2">
              {recipe?.totalTime}
            </span>
            <p className="text-secondary text-[12px] md:text-md">
              TOTAL TIME
            </p>
          </div>

   <div className="flex flex-col justify-center">
       <span className="text-primary text-center border border-gray-500 py-1.5 rounded-full mb-2">
              {recipe?.yield}
            </span>
            <p className="text-secondary text-[12px] md:text-md">SERVINGS</p>
          </div>
        </div>

  <div className="w-full flex flex-col md:flex-row gap-8 py-8 px-4 md:px-10"> {/* Adjusted padding */}         
   {/* LEFT SIDE */}
   
    <div className="w-full md:w-3/4 md:border-r border-slate-700 pr-4 md:pr-8"> {/* Adjusted padding */}            <div className="flex flex-col gap-5">


  <div className="overflow-x-auto text-white">
  <table className="table table-pin-rows">
    <thead>
      <tr className="bg-black border-b border-b-slate-700">
        <th className="text-accent text-2xl">Ingredients</th>
      </tr>
    </thead>
    <tbody>
      {recipe?.ingredientLines?.map((ingredient, index) => {
        return (
          <tr key={index} className="text-neutral-100 border-b border-b-slate-700">
  <td className="flex items-center">
    <MdPushPin className="text-green-800 text-xl flex-shrink-0" />
    <span className="text-xl ml-2 flex-grow">{ingredient}</span>
  </td>
</tr>


        );
      })}
    </tbody>
  </table>
</div>

            </div>

            {recipe?.tags?.length > 0 && (
              <div className="flex flex-col gap-3 mt-20">
                <p className="text-accent text-2xl ">
                  Related Tags
                </p>

                <div className="flex flex-wrap gap-4">
                  {recipe?.tags?.map((item, index) => (
                    <p
                      className="text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full "
                      key={index}
                    >
                      <PiBowlFoodDuotone color="green" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full">
             {recipe?.instructionLines && recipe.instructionLines.length !== 0  ? (
    <div className="flex flex-col gap-3">
      <p className="text-accent text-2xl bold">Instructions</p>

      <div className="flex flex-wrap gap-4">
        {recipe?.instructionLines.map((item, index) => (
               <ul className="menu bg-[#fff5f518] text-white w-full rounded-box">
  <li>
    <a>
      <PiBowlFoodDuotone color="green" />{item}
    Item 2
    </a>
  </li>
</ul>

        ))}
      </div>
    </div>

    
  ) : (
    <div className="w-full">
      {recommend?.length > 0 ? (
        <>
          <p className="text-white text-2xl">Also Try This</p>

          <div className="flex flex-wrap gap-6 px-1 pt-3">
            {recommend?.map((item, index) => (
              <RecipeCard recipe={item} index={index} key={index} />
            ))}
          </div>
        </>
      ) : (
             <div role="alert" className="alert shadow-lg">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div>
    <h3 className="font-bold text-error">Sorry!</h3>
    <div className="text-xs">No instructions or recommendations available.</div>
  </div>
 <div>
    <a href={recipe?.url} className="btn btn-sm btn-primary">View Recipe Article </a>
  </div>
</div>
      )}
    </div>
  )}
          </div>
        </div>

        {recipe?.instructionLines && recipe.instructionLines.length !== 0  && (
          
          <div className="w-auto flex-col justify-center items-center my-10">
  <p className="text-white text-2xl text-center">Also Try These Recipes</p>
  {recommend?.length > 0 && (
    
    <div className="flex flex-wrap gap-2 px-1 pt-3 justify-center"> {/* Added mx-auto for centering */}
      {recommend?.map((item, index) => (
        <RecipeCard recipe={item} index={index} key={index} />
      ))}
    </div>
  )}
</div>

        )}
      </div>
    </div>
  );
}

export default RecipeDetail;
