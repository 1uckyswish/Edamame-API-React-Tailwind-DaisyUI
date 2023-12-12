import React from 'react'
import { Link } from 'react-router-dom';

function RecipeCard({recipe}) {
    const {image, label, cuisineType, dietLabel, mealType, uri, dishType, healthLabels, calories, totalTime} = recipe?.recipe;
    const id = uri?.split("#")[1];
  return (
    <Link to={`/recipes/${id}`} className='w-full md:w-[450px]'>
    <div className="card bg-base-100 shadow-xl w-auto text-black">
  <figure><img src={image} alt={label} className='rounded-lg h-[500px] md:h-[200px] w-full'/></figure>
  <div className="card-body p-3">
    <h2 className="card-title font-bold">
     {label}
    </h2>
    <div className="justify-start pb-0.5">
         <div className="badge badge-accent text-[12px] capitalize">{cuisineType[0]}</div>
       <div className="badge badge-accent text-[12px] capitalize">{mealType}</div>
    </div>
       
    <div className="card-actions justify-start">
      {
        healthLabels.slice(0, 4).map((item)=>{
            return <div className="badge badge-outline">{item}</div>
        })
      }
    </div>
    <p>In just {totalTime} minutes, this {cuisineType[0]}-inspired dish brings together a burst of flavors, creating a satisfying meal with a total of {parseInt(calories)} calories. Treat yourself to the perfect recipe</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
 </Link>
  )
}

export default RecipeCard