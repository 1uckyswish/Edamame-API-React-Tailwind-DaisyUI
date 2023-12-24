import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  return (
    <main className='w-full flex-col'>
        <Header title={<p>Taste the world with <br /> Edamame</p>} type="home"/>
        <section id='recipes' className='md:max-[1440px] mx-auto px-4 md:px-20'>

<div className="hero bg-base text-white">
  <div className="hero-content flex-col lg:flex-row-reverse items-center">
    <img
      src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="max-w-full lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0"
      alt="Recipe"
    />
    <div className="text-center lg:text-left">
      <h1 className="text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">500+ Top Web Recipe Sources</h1>
      <p className="py-2 lg:py-6">Our search algorithm returns the most relevant recipes from the most popular and best recipes sources on the web. We order recipes by their cookability and quality, so you can always count on getting the best recipes!</p>
      <button className="btn btn-primary" onClick={() => navigate("/search")}>Get Started</button>
    </div>
  </div>
</div>


<div className="carousel carousel-center mt-8 p-4 space-x-4 bg-neutral rounded-box">

<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1651763087839-4221cf6e30a7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fEFwcGV0aXplcnMlMjBhbmQlMjBTbmFja3N8ZW58MHwxfDB8fHww"  class="w-64 h-96 object-cover object-center" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Appetizers and Snacks</h2>
    <p className="text-base text-center">Variety of finger foods, dips, and small bites perfect for parties or quick snacks.</p>
  </div>
</div>

<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFpbiUyMGVudHJlZXxlbnwwfDF8MHx8fDA%3D"  class="w-64 h-96 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Main Courses</h2>
    <p className="text-base text-center">Diverse recipes for main dishes, including various dietary preferences </p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1558326567-98ae2405596b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc3NlcnRzfGVufDB8MXwwfHx8MA%3D%3D"  class="w-64 h-96 object-cover object-center" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Desserts</h2>
    <p className="text-base text-center">A range of sweet treats, including cakes, cookies and other indulgent desserts</p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  class="w-64 h-96 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Healthy  Meals</h2>
    <p className="text-base text-center">Nutritious recipes suitable for those looking for healthier meal options</p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=3035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  class="w-64 h-96 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">International Cuisine</h2>
    <p className="text-base text-center">Explore recipes from around the world, representing different cultures</p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1621939650348-2a4139949c7a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFBhc3RyeXxlbnwwfDF8MHx8fDA%3D"  class="w-64 h-96 object-cover object-center" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Baking and Pastry</h2>
    <p className="text-base text-center">Recipes related to covering bread, pastries, muffins, and other baked goods.</p>
  </div>
</div>
<div className="carousel-item card relative">
  <img src="https://images.unsplash.com/photo-1604467758117-72d987cb513b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBpenphJTIwcm9sbHN8ZW58MHx8MHx8fDA%3D"  class="w-64 h-96 object-cover object-bottom" />
  <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-[2] bg-opacity-30 bg-black p-4">
    <h2 className="text-xl font-bold">Quick and Easy</h2>
    <p className="text-base text-center">A collection of recipes that are quick and easy to prepare, catering to individuals with busy schedules</p>
  </div>
</div>
</div>


<div className="hero bg-base text-white mt-8">
  <div className="hero-content flex-col lg:flex-row items-center">
    <img
      src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="max-w-full lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0"
      alt="Nutrition Recipe"
    />
    <div className="text-center lg:text-left">
      <h1 className="text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">Full Nutrition For Each Recipe</h1>
      <p className="py-2 lg:py-6">We have the most accurate automated nutrition analysis on the web powered. Every user gets a detailed nutrition breakdown of each recipe with 25+ nutrients and appropriateness for all major diets.</p>
      <button className="btn btn-primary" onClick={() => navigate("/search")}>Get Started</button>
    </div>
  </div>
</div>


{/* <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
            dd
            </div>
            <div className="pr-5 stat-title">Followers</div>
            <div className="pr-5 text-3xl stat-value md:text-4xl">
             dd
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
             h
            </div>
            <div className="pr-5 stat-title">Following</div>
            <div className="pr-5 text-3xl stat-value md:text-4xl">
            hh
            </div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
             hh
            </div>
            <div className="pr-5 stat-title">Public Repos</div>
            <div className="pr-5 text-3xl stat-value md:text-4xl">
             hh
            </div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
             hh
            </div>
            <div className="pr-5 stat-title">Public Gists</div>
            <div className="pr-5 text-3xl stat-value md:text-4xl">
              hh
            </div>
          </div>
        </div>
      */}

<div className="w-full py-5 my-10 rounded-lg shadow-md bg-base-100 stats">
  <div className="stats">
  
  <div className="stat">
    <div className="stat-figure text-primary">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title text-[#24321a]">Total Recipes</div>
    <div className="stat-value text-primary">2.3M</div>
    <div className="stat-desc">Jan 1st 2023 - Nov 31st 2023</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>    </div>
    <div className="stat-title text-[#24321a]">Food Items</div>
    <div className="stat-value text-primary">900K</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
   <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>       </div>
    <div className="stat-title text-[#24321a]">Major Diets/Allergens</div>
    <div className="stat-value text-primary">40+</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

    <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title text-[#24321a]">Total Users</div>
    <div className="stat-value text-primary">4.6K</div>
    <div className="stat-desc">2% more than last month</div>
  </div>
 
</div>
</div>

<div className="hero bg-base text-white">
  <div className="hero-content flex-col lg:flex-row-reverse items-center">
    <img
      src="https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlldHxlbnwwfHwwfHx8MA%3D%3D"
      className="max-w-full lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0"
      alt="Filtered Recipe"
    />
    <div className="text-center lg:text-left">
      <h1 className="text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">Filtered Recipe's By Diet And Health</h1>
      <p className="py-2 lg:py-6">The Edamame database allows users to filter foods based on diet and health criteria. All data in the food database is enhanced with diet, allergy, and nutrition labels, which are calculated by Edamam using the ingredients of each food. Among the 70+ claims automatically generated, some examples include Peanut-Free, Shellfish-Free, Gluten-Free, Vegan, and Vegetarian.</p>
      <button className="btn btn-primary" onClick={() => navigate("/search")}>Get Started</button>
    </div>
  </div>
</div>



{/* <div className='mt-10'>
  <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</div> */}

<div tabIndex={0} className="collapse collapse-close border border-base-300 bg-base-200 mt-10"> 
  <div className="collapse-title text-xl font-medium">
    View Testimonals
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>

    <div className="overflow-x-auto bg-base-100 rounded-2xl py-2 px-0">
  <table className="table">
    <tbody>
        <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://pbs.twimg.com/profile_images/1268192121477046272/oxLhAY5V_400x400.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">VentureBeat</div>
              <div className="text-sm opacity-50">USA</div>
            </div>
          </div>
        </td>
           <td className='italic'>
          "Eating right is hard, but the Edamame app makes it more palatable" - April 18,2012
          {/* <br/> */}
        </td>
      </tr>
             <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1488570589/cauf2hzuag3akduqzixm.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">CNET</div>
              <div className="text-sm opacity-50">USA</div>
            </div>
          </div>
        </td>
        <td className='italic'>
          "Tasty little recipe app one-ups Google" - December 1,2017
        </td>
      </tr>
           <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://2.gravatar.com/avatar/e3e529b80cdcb6479bb3b4ac2c1a2d85?s=400&d=mm&r=g" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Forbes</div>
              <div className="text-sm opacity-50">USA</div>
            </div>
          </div>
        </td>
           <td className='italic'>
          "Edamame's App Helps People Find Quality Recipes On-The-Go" - February 7,2013
        </td>
      </tr>
           <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://s.yimg.com/uu/api/res/1.2/l_wEBH56oWboJLadyoDWTg--~B/aD02NDg7dz02NDg7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-09/1f16fbf0-de0a-11e9-9af9-77bfe97840a9" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yahoo! Finance</div>
              <div className="text-sm opacity-50">USA</div>
            </div>
          </div>
        </td>
           <td className='italic'>
          "Edamame Unveils Recipe Search for Today's Health Conscious Consumer" - April 18,2015
        </td>
      </tr>
           <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Logo_Semantic_Web.svg/2048px-Logo_Semantic_Web.svg.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">SemanticWeb</div>
              <div className="text-sm opacity-50">USA</div>
            </div>
          </div>
        </td>
           <td className='italic'>
          "Edamam's Semantic Smarts Help Serve Up Dinner Plans" - May 16,2012
        </td>
      </tr>
      </tbody>

  </table>
</div>


</div>

 {/* <div className="hero bg-base text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">500+ Top Web Recipe Sources</h1>
      <p className="py-6">Our search algorithm returns the most relevant recipes from the most popular and best recipes sources on the web. We order recipes by their cookability and quality, so you can always count on getting the best recipes!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}




<div className="hero bg-base-200 rounded-2xl my-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up for our Newsletter</h1>
      <p className="py-6">Sign up to receive notifications about new recipe additions, local upcoming events, and more.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div> */}
        <div className="form-control mt-6">
          {/* The button to open modal */}
<label htmlFor="my_modal_7" className="btn btn-primary">Subscribe</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold text-center">Thank you!</h3>
    <h3 className="text-lg font-bold text-center">Welcome to the Edamame Family</h3>
    <p className="py-4 text-center">Check Your Email to see our staffs favorite recipes!</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
        </div>
      </form>
    </div>
  </div>
</div>


          {/* <Recipes /> */}
        </section>
    </main>
  )
}

export default Home