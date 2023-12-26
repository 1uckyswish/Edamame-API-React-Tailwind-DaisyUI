import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1529565214304-a882ebc5a8e6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
       <div className="hero-overlay bg-gradient-to-t from-black to-transparent top-0 z-8 absolute w-full h-full"></div>
<div className="hero-content text-center text-neutral-content relative z-10">
  <div className="max-w-md mx-auto text-white">
    <h1 className="mb-5 text-5xl font-bold">Welcome to my Food Recipe Web Application!</h1>
    <p className="mb-5 text-lg">
      Explore a sleek interface powered by React, Tailwind CSS, and Styled Components, with added magic from the Daisy UI library. Connected to the Edamam API, it offers delicious recipes and personalized recommendations based on dietary preferences.
    </p>
    <p className="mb-5 text-lg">
      More than a coding achievement, it reflects my commitment to crafting user-friendly, innovative web experiences. Dive into a world of culinary possibilities with my Food Recipe Web App!
    </p>
  </div>
</div>
</div>


  

     <div className="mb-28 mx-auto max-w-2xl text-center text-white">
         <div className="avatar mb-6">
           <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
             <img className="object-cover w-full h-full" src="https://avatars.githubusercontent.com/u/107442415?v=4" alt="Noel Guillen" />
           </div>
         </div>
         <h2 className="text-3xl font-bold mb-4">About Me</h2>
         <p className="text-lg text-gray-200">
           Hey there! I'm Noel, a passionate front-end developer. My journey involves turning ideas into interactive and visually appealing web experiences. Check out my <a href="https://noelguillen.netlify.app/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Portfolio</a> to witness some of my creations. Feel free to connect with me on <a href="https://www.linkedin.com/in/noel-guillen-blas-b63353257/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> or explore my coding adventures on <a href="https://github.com/1uckyswish" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>.
         </p>
       </div>

      <Footer />
    </>
  );
}

export default About;
