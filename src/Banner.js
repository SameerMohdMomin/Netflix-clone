import React, { useState, useEffect } from "react";
import axios from './axios';
import requests from './Request';
import './Banner.css';



function Banner(){
    
    const [movie, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTranding);
            setMovies(
                       request.data.results[
                           Math.floor(Math.random() * request.data.results.length - 1)
                        ]
                );
            return request;
        }
        fetchData();

    }, []);

    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." :str;
    }


     return(
                 
            <header className="banner"
              style={{
                // backgroundSize:"cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                // backgroundPosition:"center cover",

              }}
            >
                <div className="banner_content">
                     <h1 className="banner_title d-flex justify-content-start">
                         {movie?.name || movie?.title || movie?.original_name}

                     </h1>

                     <div className="banner_buttons  d-flex justify-content-start">
                         <button className="banner_button">Play</button>
                         <button className="banner_button">My List</button>
                         

                     </div>
                     <h1 className="discription d-flex justify-content-start">
                         {truncate(movie?.overview, 150)}
                     </h1>
                </div>
                {/* <div className="banner--fadeBottom" /> */}
            </header>
     )
}

export default Banner;