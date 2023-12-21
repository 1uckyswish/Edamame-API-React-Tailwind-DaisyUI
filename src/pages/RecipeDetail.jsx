import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchRecipe, fetchRecipes } from '../utils';
import Loading from '../components/Loader';
import Header from '../components/Header';
import { MdPushPin } from "react-icons/md";
import { PiBowlFoodDuotone } from "react-icons/pi";
import RecipeCard from '../components/RecipeCard';
function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recommend, setRecommend] = useState([]);
  console.log(recommend)

  const {id} = useParams();

const getRecipe = async (id)=>{
 try {
   setLoading(true);

  const data = await fetchRecipe(id);

  setRecipe(data);

  const recommendRecipes = await fetchRecipes({ query: recipe?.label, limit: 5});

  setRecommend(recommendRecipes.hits);
  setLoading(false);
 } catch (error) {
  console.log(error);
  setLoading(false);
 }
}

useEffect(()=>{
  getRecipe(id);
},[id])

if (loading) {
    return (
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <Loading />
      </div>
    );
  }

  return (
     <div className='w-full'>
      <Header
        title={recipe?.label} image={recipe?.image}
      />

      <div className='w-full px-4 lg:px-20 pt-5'>

        <div className='flex gap-10 items-center justify-center px-4'>
          <div className='flex flex-col justify-between'>
            <span className='text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>{recipe?.calories.toFixed(2)} </span>

            <p className='text-neutral-100 text-[12px] md:text-md'>CALORIES</p>
          </div>

          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.totalTime}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>
              TOTAL TIME
            </p>
          </div>

          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.yield}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>SERVINGS</p>
          </div>


        </div>

        <div className='w-full flex flex-col ml-16 sm:flex-row gap-8 py-20 pxx-4 md:px-10'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
            <div className='flex flex-col gap-5'>
              <p className='text-green-500 text-2xl underline'>Ingredients</p>

              {
                recipe?.ingredientLines?.map((ingredient, index) => {
                  return (
                    <p key={index} className='text-neutral-100 flex gap-2'>
                      <MdPushPin className='text-green-800 text-xl' /> {ingredient}
                    </p>
                  )
                })
              }
            </div>

            <div className='flex flex-col gap-3 mt-20'>
              <p className='text-green-700 text-2xl underline'>Health Labels</p>

              <div className='flex flex-wrap gap-4'>
                {
                  recipe?.healthLabels.map((item, index) => (
                    <p className='text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full ' key={index}>
                      <PiBowlFoodDuotone color='green' /> {item}
                    </p>
                  ))
                }

              </div>
            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className='w-full'>
            {
              recommend?.length > 0 && (
                <>
                  <p className='text-white text-2xl'>Also Try This</p>

                  <div className='flex flex-wrap gap-6 px-1 pt-3'>
                    {
                      recommend?.map((item, index) => (
                        <RecipeCard recipe={item} index={index} />
                      ))
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail