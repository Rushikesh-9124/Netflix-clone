import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Titlecards from '../../components/Title-cards/Titlecards'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><FaPlay className='play-btn my-btn'/>Play</button>
            <button className='btn dark-btn'><IoIosInformationCircleOutline className='info-btn my-btn'/>More Info</button>
          </div>
          <Titlecards category={"now_playing"}/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title="Popular" category={"popular"}/>
        <Titlecards title="Top Rated" category={"top_rated"}/>
        <Titlecards title="Upcoming" category={"upcoming"}/>
        <Titlecards title="Top Pics For You" category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
