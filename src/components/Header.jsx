import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from '../images';

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

function Header({ title, type, search }) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const searchSectionRef = useRef(null);

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((imageSrc) => {
        const image = new Image();
        image.src = imageSrc;
        return new Promise((resolve) => {
          image.onload = resolve;
        });
      });
      Promise.all(imagePromises).then(() => setLoadedImages([...images]));
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const scrollToSearch = () => {
    if (searchSectionRef.current) {
      window.scrollTo({
        top: searchSectionRef.current.offsetTop + window.innerHeight / 2,
        behavior: 'smooth',
        duration: 800,
      });
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${loadedImages[currentImageIndex] || ''})`,
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="hero-overlay bg-gradient-to-t from-black to-transparent top-0 z-8"></div>
      <div className="hero-content text-center text-neutral-content" ref={searchSectionRef}>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5 text-lg ">
            {search
              ? search
              : 'Explore the culinary world with Edamam! Dive into our database of nearly 900,000 entries, from everyday basics to restaurant delights and convenient packaged goods.'}
          </p>
          {type === 'Search' ? (
            <button className="btn btn-primary" onClick={scrollToSearch}>
              Search Recipe's down below
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => navigate('/search')}>
              Get Started with your next recipe!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
