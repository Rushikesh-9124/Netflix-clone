import React, { useEffect, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const Titlecards = ({title, category}) => {
  const [addClass, setAddClass] = useState(null);
  const [apiData, setApiData] = useState([]);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkNjgwNWM5N2FiNTAyYjE5MzAxMTNlZmI1ZGU5MiIsIm5iZiI6MTc0MjcxNzU4Ni4wNTc5OTk4LCJzdWIiOiI2N2RmYzI5MmY2YTBmY2JkMDA0ZDkzZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.J0iodelgHnk1PiMjyTHc8eF1VRgwicPgpgMmlTJEwQ4'
      }
    };
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${category?category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    },[])

  return (
    <div className='title-cards'>
      <h2>{title?title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index} onMouseLeave={() => setAddClass(null)} onMouseEnter={() => setAddClass(index) }>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p className={`${addClass === index ? "active-p" : ""}`}>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards
