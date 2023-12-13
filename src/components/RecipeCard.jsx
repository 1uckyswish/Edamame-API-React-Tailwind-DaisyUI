import React from 'react'
import { Link } from 'react-router-dom';

function RecipeCard({recipe}) {
    const {image, label, cuisineType, mealType, uri, dishType, healthLabels, calories, totalTime, url} = recipe?.recipe;
    const id = uri?.split("#")[1];

    const phrases = [
  'In just {totalTime} minutes, this {cuisineType[0]}-inspired dish brings together a burst of flavors, creating a satisfying meal with a total of {parseInt(calories)} calories. Treat yourself to the perfect recipe',
  'Explore the rich flavors of this {cuisineType[0]} dish, ready in {totalTime} minutes. With {parseInt(calories)} calories, it’s a delightful treat for your taste buds!',
  'Savor the goodness of a {cuisineType[0]} masterpiece that takes only {totalTime} minutes to prepare. A total of {parseInt(calories)} calories make it a guilt-free indulgence.',
  'Indulge in culinary bliss with this {cuisineType[0]} creation that takes just {totalTime} minutes to cook. It’s a great delight with {parseInt(calories)} calories.',
  'Embark on a flavor journey with this {cuisineType[0]} dish, crafted in {totalTime} minutes. Relish the goodness of {parseInt(calories)} calories in every bite.',
  'Experience the magic of a {cuisineType[0]} adventure on your plate. Ready in just {totalTime} minutes, this dish boasts {parseInt(calories)} calories of pure delight.',
  'Satisfy your cravings with this quick {totalTime}-minute {cuisineType[0]} delight. Enjoy a guilt-free treat with {parseInt(calories)} calories and a burst of flavors.',
  'Tantalize your taste buds with the essence of {cuisineType[0]} cuisine. In {totalTime} minutes, savor the goodness of {parseInt(calories)} calories in every mouthful.',
  'Elevate your dining experience with this {cuisineType[0]} sensation. A masterpiece in just {totalTime} minutes, it’s a guilt-free pleasure with {parseInt(calories)} calories.',
  'Delight in the artistry of {cuisineType[0]} cuisine, ready in {totalTime} minutes. This dish, with {parseInt(calories)} calories, promises a symphony of flavors.',
  'Experience a burst of {cuisineType[0]} flavors in this {totalTime}-minute creation. With {parseInt(calories)} calories, it’s a culinary journey that will leave you satisfied.',
  'Savor the fusion of {cuisineType[0]} goodness in just {totalTime} minutes. This dish, with {parseInt(calories)} calories, is a delightful harmony of taste and health.',
  'Immerse yourself in the {cuisineType[0]} experience with this {totalTime}-minute wonder. A total of {parseInt(calories)} calories make it a wholesome treat for any occasion.',
  'Embark on a culinary adventure with this {cuisineType[0]} masterpiece. Ready in {totalTime} minutes, it offers {parseInt(calories)} calories of pure indulgence.',
  'Treat your senses to the rich flavors of {cuisineType[0]} cuisine. This {totalTime}-minute creation, with {parseInt(calories)} calories, is a culinary masterpiece.',
  'Indulge in the symphony of flavors in this {cuisineType[0]} dish. Ready in {totalTime} minutes, it boasts {parseInt(calories)} calories and culinary perfection.',
  'Elevate your dining experience with this {cuisineType[0]} sensation. In just {totalTime} minutes, enjoy a guilt-free pleasure with {parseInt(calories)} calories.',
  'Savor the richness of {cuisineType[0]} cuisine in this {totalTime}-minute delight. With {parseInt(calories)} calories, it’s a culinary journey that will leave you satisfied.',
  'Immerse yourself in the {cuisineType[0]} experience with this {totalTime}-minute wonder. A total of {parseInt(calories)} calories make it a wholesome treat for any occasion.',
  'Embark on a culinary adventure with this {cuisineType[0]} masterpiece. Ready in {totalTime} minutes, it offers {parseInt(calories)} calories of pure indulgence.',
  'Treat your senses to the rich flavors of {cuisineType[0]} cuisine. This {totalTime}-minute creation, with {parseInt(calories)} calories, is a culinary masterpiece.',
  'Indulge in the symphony of flavors in this {cuisineType[0]} dish. Ready in {totalTime} minutes, it boasts {parseInt(calories)} calories and culinary perfection.',
  'Elevate your dining experience with this {cuisineType[0]} sensation. In just {totalTime} minutes, enjoy a guilt-free pleasure with {parseInt(calories)} calories.',
  'Savor the richness of {cuisineType[0]} cuisine in this {totalTime}-minute delight. With {parseInt(calories)} calories, it’s a culinary journey that will leave you satisfied.',
  'Experience the magic of {cuisineType[0]} cuisine in this {totalTime}-minute masterpiece. With {parseInt(calories)} calories, it’s a delightful treat for your taste buds!',
  'Indulge in culinary bliss with this {cuisineType[0]} creation that takes just {totalTime} minutes to cook. It’s a great delight with {parseInt(calories)} calories.',
  'Embark on a flavor journey with this {cuisineType[0]} dish, crafted in {totalTime} minutes. Relish the goodness of {parseInt(calories)} calories in every bite.',
  'Immerse yourself in the {cuisineType[0]} experience with this {totalTime}-minute wonder. A total of {parseInt(calories)} calories make it a wholesome treat for any occasion.',
  'Elevate your dining experience with this {cuisineType[0]} sensation. In just {totalTime} minutes, enjoy a guilt-free pleasure with {parseInt(calories)} calories.',
  'Savor the richness of {cuisineType[0]} cuisine in this {totalTime}-minute delight. With {parseInt(calories)} calories, it’s a culinary journey that will leave you satisfied.',
];

// Randomly select a phrase
const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

// Replace placeholders in the selected phrase with actual values
const formattedText = randomPhrase
  .replace('{totalTime}', totalTime)
  .replace('{cuisineType[0]}', cuisineType[0])
  .replace('{parseInt(calories)}', parseInt(calories));

// Use formattedText in your component

  return (
    <div className='w-full md:w-[300px]'>
    <div className="card bg-base-100 shadow-xl w-auto text-black">
  <figure><img src={image} alt={label} className='rounded-lg h-[250px] w-full'/></figure>
  <div className="card-body p-3 h-[45vh]">
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
     <p>{formattedText}</p>
   <div className="flex justify-center">
            <Link to={`/recipes/${id}`} className="btn btn-primary">View Recipe</Link>
            <Link to={`${url}`} className="btn btn-accent ml-2">Read Article</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard