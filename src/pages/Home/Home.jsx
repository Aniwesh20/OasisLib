import React from 'react';
// import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
// import Navbar from "../../components/Navbar/Navbar"
import SearchForm from "../../components/SearchForm/SearchForm";
import "./home.css"

const Home = () => {
  return (



    <div className='holder'>
      <header className='header'>

        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
          <p className='header-text fs-18 fw-3'>“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”</p>
          <SearchForm />
        </div>

      </header>
      <Outlet />
    </div>



  )
}

export default Home
