import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route, Outlet } from 'react-router-dom';
import RecipeDetail from './pages/RecipeDetail';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';

function Layout(){
  return(
    <>
      <Navbar />
      <Home/>
      <Outlet />
      <Footer/>
    </>
  )
}


function SearchPage(){
  return(
    <>
      <Navbar />
      <Search/>
      <Outlet />
      <Footer/>
    </>
  )
}


function RecipeLayout(){
  return(
    <>
      <Navbar />
      <RecipeDetail/>
      <Outlet />
      <Footer/>
    </>
  )
}

function App() {
  return (
   <div className='bg-black'>
    <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='/search' element={<SearchPage />}/>
        {/* <Route index element={<Home />}/> */}
        <Route path='recipes/:id' element={<RecipeLayout />}/>
        <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
    </Routes>
   </div>
  )
}

export default App
