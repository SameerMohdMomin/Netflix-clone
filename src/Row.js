import React, { useState, useEffect } from "react";
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);

    console.log(movies);
    
    const opts={
        height : "390px",
        width : "100%",
        playerVars: {

            autoplay:1,
            
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");  
        } else {
            movieTrailer(movie?.name || movie?.original_title || movie?.title || movie?.original_name || "")
            .then((url) => {
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };




    return(
        <div className="row p-3">
            <h3 className="text-white p-3">{title}</h3>
            <div className="row_posters">    
           
                {movies.map(movie => (
                   
                      
                    
                   
                    <img className={`row_poster ${isLargeRow && "row_postLarge"}`} onClick={() => handleClick(movie)} src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} id={movie.id}  alt={movie.name}/>
                
                  
                    
                    
                ))}


            </div>
            <div className="col-12">
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
          
           

        </div>
        
    );
}

export default Row;