import React from 'react';
// import Header from '../../components/Header/Header';
import { useGlobalContext } from '../../context.';
import Loading from "../../components/Loader/Loader";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Navbar from "../../components/Navbar/Navbar"

import "./home.css"

const Home = () => {
  const { loading } = useGlobalContext();
  if (loading) return <Loading />;
  return (



    <div className='holder'>
      <header className='header'>

        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Welcome to Oasis Library</h2><br />
          <p className='header-text'><em>“Where Knowledge Meets Serenity”</em></p>
          <button className="home-btn" type="submit"><Link to="/login"><strong>Let's Read</strong></Link></button>
          {/* <SearchForm /> */}
        </div>

      </header>
      <Outlet />
    </div>



  )
}

export default Home
