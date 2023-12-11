import React from 'react'
import Header from '../components/Header'


function Home() {
  return (
    <main className='w-full flex-col'>
        <Header title={<p>Taste the world with <br /> Edamame</p>} type="home"/>
    </main>
  )
}

export default Home