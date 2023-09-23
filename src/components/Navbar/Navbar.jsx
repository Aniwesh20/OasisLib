import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaHome, FaBook } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1 headingColor'>Oasis Library</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'> <FaHome /> Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><FaBook /> Books</Link>
            </li>
            <li className='nav-item'>
              <Link to="login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><RiLoginCircleFill /> Login</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><HiUserGroup /> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar