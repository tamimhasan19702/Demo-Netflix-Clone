import React, {useState,useEffect} from 'react';
import axios from 'axios';
import requests from './requests';

function Banner() {
  const [movie,setMovie] = useState([]);


//   useEffect is a special method which runs on a special condition

  useEffect(() => {
   async function fetchData(){
  //  const request = await axios.get(requests.fetchNetflixOriginals);
   const request = await axios({url:requests.fetchNetflixOriginals, baseURL: 'https://api.themoviedb.org/3'});

  setMovie(request.data.results[ Math.floor(Math.random() * request.data.results.length - 1)]);
   return request;
   
  }

   fetchData();
  }, []);


 console.log(movie.backdrop_path)

  return (
    <header 
    className="banner"
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url("https://image.tmdb.org/t/p/original//${movie?.backdrop_path}")`,
      backgroundPosition: " center center",
    }}>
       
        <div className="banner-contents">
     
        <h1>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        </div>
       

    </header>
  )
}

export default Banner;
