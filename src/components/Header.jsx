import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from '../images'

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

function Header({image, title, type}) {
  const navigate = useNavigate();
  return (
    // <div className='w-full h-[100vh]'>
    //   <div className='relative w-full h-full'>
    //     <img className='w-full h-full object-cover' src={image ?? images[Math.floor(Math.random() * images.length)]} alt='Recipes' />
    //   </div>
    //   <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 pt-4'>
    //     <h1 className='menu-title text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>
    //      {
    //       type && (
    //         <p className='menu-title text-sm mt-4 text-center text-accent bg-[#000000] px-6 py-4 rounded-full '>Welcome to FlavorVerse, your passport to culinary adventures!
    //           <br className='hidden md:block' /> Feast on Worldly Wonders: Global Goodness, Simply Irresistible!</p>
    //       )
    //     }
    //   </div>
    // </div>
    <div className="hero min-h-screen" style={{backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})`}}>
  <div className="hero-overlay  bg-gradient-to-t from-black to-transparent top-0 z-8"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5 text-lg ">Explore the culinary world with Edamam! Dive into our database of nearly 900,000 entries, from everyday basics to restaurant delights and convenient packaged goods.</p>
      <button className="btn btn-primary" onClick={()=>navigate("/search")}>Get Started with your next recipe!</button>
    </div>
  </div>
</div>
  )
}

export default Header