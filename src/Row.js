//rfce = shortcut snippet to generate this method functionalities.

import React from 'react'
import axios from './axios';
import {useState, useEffect} from 'react';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://images.tmdb.org/t/p/original/";

function Row({title, fetchurl, isLargeRow}) {

    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");



    //a snippet of code which runs based on specific condition

    useEffect( () => {

        // if empty [], means run once when the row loads, and don't run again
        //if non-empty [movies ], loads movies 
        async function fetchData() {
            const request = await axios.get(fetchurl);
            //here fetchurl variable comes from outside of useEffect so we have to use in the array 
            //console.log(request.data.results);
            setmovies(request.data.results);
            //console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchurl]);

    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        }
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        }else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search) ;
                setTrailerUrl(urlParams.get('v'));

            }).catch(error => console.log(error));
        }
    }
















    //console.log(movies);


    return (
        <div className="row">
            {/* title */}
            <h4>{title}</h4>

            <div className="row_posters">
                {/* several row_poster(s) */}
                {movies.map(
                    movie => (
                        <img 
                        key= {movie.id}
                        onClick = { () => handleClick(movie)}
                        className={`row_poster ${ isLargeRow && "row_posterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                    )
                )}
            </div>
                    {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts}/> }
        </div>
    )
}

export default Row;

