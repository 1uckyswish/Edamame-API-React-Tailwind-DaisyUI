import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {/* Edamam API Credit */}
            <h1 className="mb-5 text-5xl font-bold">Special thanks to Edamam API</h1>
            <p className="mb-5">We would like to express our gratitude to Edamam for allowing us to use their Recipe API to create a unique version of our app. The ability to search a database of over 2.3 million recipes, powered by Edamam, enhances the user experience.</p>
            <p>We appreciate the support and features provided by Edamam, making it possible for us to offer a diverse range of recipes to our users. Get started and enjoy the culinary journey!</p>
             <button className="btn btn-primary text-white hover:bg-accent hover:text-black font-bold py-2 px-4 rounded-full mt-4">
              Check Them Out!
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Contact;
