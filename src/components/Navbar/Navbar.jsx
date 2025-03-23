import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { FaSearch } from "react-icons/fa"; // import search from '../../assets/search_icon.svg'
import { FaRegBell } from "react-icons/fa6";
import profile_icon from '../../assets/profile_img.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { auth, logOut } from '../../firebase';




const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  const [activeIndex, setActiveIndex] = useState(0); // Store active index

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          {["Home", "Tv Shows", "Movies", "New & Popular", "My List", "Browse by Languages"].map((item, index) => (
            <li 
            key={index} onClick={() => setActiveIndex(index)} className={`${activeIndex === index ? "active": ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className='icons' />
        <p>Children</p>
        <FaRegBell className='icons' />
        <div className="navbar-profile">
          <img src={profile_icon} alt="" className="profile" />
          <IoMdArrowDropdown className='dropdown-icon icon'/>
          <div className="dropdown">
            <p onClick={() => {logOut()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
