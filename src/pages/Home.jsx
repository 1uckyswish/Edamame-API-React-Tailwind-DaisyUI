import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'


function Home() {
  return (
    <main className='w-full flex-col'>
        <Header title={<p>Taste the world with <br /> Edamame</p>} type="home"/>
        <section id='recipes' className='md:max-[1440px] mx-auto px-4 md:px-20'>
          <Recipes />
        </section>
    </main>
  )
}

export default Home