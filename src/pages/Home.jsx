import React from 'react'
import Header from '../components/Header'


function Home() {
  return (
    <main className='w-full flex-col'>
        <Header title={<p>Taste the world with <br /> Edameme</p>}/>
    </main>
  )
}

export default Home