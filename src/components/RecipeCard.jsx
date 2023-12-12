import React from 'react'

function RecipeCard({recipe}) {
    const {image, label, cuisineType, dietLabel, mealType, url} = recipe?.recipe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-accent">NEW</div>
    </h2>
    <div className="card-actions justify-start">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
  )
}

export default RecipeCard