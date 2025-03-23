import React from 'react'
import './Footer.css'

import { SlSocialYoutube } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <TiSocialFacebookCircular  className='sm-icon'/>
        <FiInstagram className='sm-icon'/>
        <BsTwitterX className='sm-icon'/>
        <SlSocialYoutube className='sm-icon'/>
      </div>

      <ul>
        <li><a href="#">Audio Description</a></li>
        <li><a href="#">Help Centre</a></li>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Media Centre</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <p className="copyright-text">
        &copy; 1997-2025 Netflix, Inc.
      </p>
    </div>
  )
}

export default Footer
