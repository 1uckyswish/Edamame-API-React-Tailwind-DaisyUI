import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchRecipe, fetchRecipes } from '../utils';
import Loading from '../components/Loader';
import Header from '../components/Header';
function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recommend, setRecommend] = useState([]);

  const {id} = useParams();

const getRecipe = async (id)=>{
 try {
   setLoading(true);

  const data = await fetchRecipe(id);

  setRecipe(data);

  const recommendRecipes = await fetchRecipes({ query: recipe?.label, limit: 5});

  setRecommend(recommendRecipes);
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
      <Header title={recipe?.label} image={recipe?.image} type="Recipe" search={recipe?.summary}/>
       <div className='w-full px-4 lg:px-20 pt-5'>
          div className='flex gap-10 items-center justify-center px-4'>
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
    </div>
  )
}

export default RecipeDetail