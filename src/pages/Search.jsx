import React from 'react';
import Header from '../components/Header';
import Recipes from '../components/Recipes';

function Search() {
  return (
    <>
      <div className='w-full flex flex-col h-[100vh]'>
        <Header title={<p>  Unlock your next Edamame recipe with just one search.</p>} type="Search" search={" Uncover a world of delicious possibilities as you discover the perfect Edamame-inspired dish, bringing innovation and joy to your kitchen."}/>
      </div>
         <Recipes />
    </>
  );
}

export default Search;
