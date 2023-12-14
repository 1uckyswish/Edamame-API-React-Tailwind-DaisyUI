import React from 'react';
import Header from '../components/Header';
import Recipes from '../components/Recipes';

function Search() {
  return (
    <>
      <div className='w-full flex flex-col'>
        <Header title={<p>Taste the world with <br /> Edamame</p>} type="home" />
       
      </div>
      <Recipes />
    </>
  );
}

export default Search;
