import React, { useEffect, useState } from 'react'
import './Player.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';


const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key : "",
    published_at : "",
    typeof : ""
  })
  const [apiData2, setApiData2] = useState({
    name: "",
    key : "",
    published_at : "",
    typeof : ""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkNjgwNWM5N2FiNTAyYjE5MzAxMTNlZmI1ZGU5MiIsIm5iZiI6MTc0MjcxNzU4Ni4wNTc5OTk4LCJzdWIiOiI2N2RmYzI5MmY2YTBmY2JkMDA0ZDkzZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.J0iodelgHnk1PiMjyTHc8eF1VRgwicPgpgMmlTJEwQ4'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[res.results.length - 1]))
    .catch(err => console.error(err));
  },[])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData2(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <IoArrowBackCircleOutline  className='prev-icon' onClick={() => {navigate(-2)}}/>
      <iframe width="90%" height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData2.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
