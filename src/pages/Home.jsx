import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'


function Home() {
  return (
    <main className='w-full flex-col'>
        <Header title={<p>Taste the world with <br /> Edamame</p>} type="home"/>
        <section id='recipes' className='md:max-[1440px] mx-auto px-4 md:px-20'>
   <div className="hero bg-base text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">500+ top web recipe sources</h1>
      <p className="py-6">Our search algorithm returns the most relevant recipes from the most popular and best recipes sources on the web. We order recipes by their cookability and quality, so your customer can always count on getting the best recipes!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div className="carousel carousel-center mt-8 p-4 space-x-4 bg-base-300 rounded-box">
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1651763087839-4221cf6e30a7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fEFwcGV0aXplcnMlMjBhbmQlMjBTbmFja3N8ZW58MHwxfDB8fHww"  class="w-64 h-64 object-cover object-center" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Appetizers and Snacks</h2>
    <p className="text-sm text-center">Variety of finger foods, dips, and small bites perfect for parties or quick snacks.</p>
  </div>
</div>

<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFpbiUyMGVudHJlZXxlbnwwfDF8MHx8fDA%3D"  class="w-64 h-64 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Main Courses</h2>
    <p className="text-sm text-center">Diverse recipes for main dishes, including various dietary preferences </p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1558326567-98ae2405596b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc3NlcnRzfGVufDB8MXwwfHx8MA%3D%3D"  class="w-64 h-64 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Desserts</h2>
    <p className="text-sm text-center">A range of sweet treats, including cakes, cookies and other indulgent desserts</p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  class="w-64 h-64 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Healthy  Meals</h2>
    <p className="text-sm text-center">Nutritious recipes suitable for those looking for healthier meal options</p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=3035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  class="w-64 h-64 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">International Cuisine</h2>
    <p className="text-sm text-center">Explore recipes from around the world, representing different cultures</p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1621939650348-2a4139949c7a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFBhc3RyeXxlbnwwfDF8MHx8fDA%3D"  class="w-64 h-64 object-cover object-center" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Baking and Pastry</h2>
    <p className="text-sm text-center">Recipes related to baking and pastry, covering bread, pastries, muffins, and other baked goods.</p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1543806053-d4617b244862?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwJTIwcmFtZW58ZW58MHwxfDB8fHww"  class="w-64 h-64 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Quick and Easy</h2>
    <p className="text-sm text-center">A collection of recipes that are quick and easy to prepare, catering to individuals with busy schedules</p>
  </div>
</div>
</div>


<div className="hero bg-base text-white mt-8">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Full nutrition for each recipe</h1>
      <p className="py-6">We have the most accurate automated nutrition analysis on the web powered by our proprietary Natural Language Processing (NLP) engine. Customers get detailed nutrition breakdown of each recipe with 25+ nutrients and appropriateness for all major diets.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
          <Recipes />
        </section>
    </main>
  )
}

export default Home