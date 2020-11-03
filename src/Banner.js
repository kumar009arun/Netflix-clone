//rfce = shortcut snippet to generate this method functionalities.

import React from 'react'
import axios from './axios';
import {useState, useEffect} from 'react';
import requests from './requests';
import './Banner.css';


const baseUrl = "https://images.tmdb.org/t/p/original/";

function Banner() {

    const [movies, setmovies] = useState([]);

    //a snippet of code which runs based on specific condition

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovies(

                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
                );
                // console.log(
                //     request.data.results[
                //         Math.floor(Math.random() * request.data.results.length - 1) 
                //     ]
                // )
            return request;
        }
        fetchData();
    }, []);

    console.log(movies);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str ;
    }


    return (
        <header className="banner"
            style = {
                {
                    backgroundSize: "cover",
                    backgroundImage : `url(
                        ${baseUrl}${movies?.backdrop_path}
                    )`,
                    backgroundPosition: "center center",
                }
            }
        > 
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_descriptions">
                   {truncate(movies?.overview, 150)}
                </h1>

            </div>

            <div className="banner_fadeBottom"></div>


            
            
            
            
            
            
            
            
            
            
            
            {/*Background Image */}
            {/* title */}
            {/* div >>> 2 button (play and myList) */}
            {/* descriptions... */}
        </header>
    )
}

export default Banner;

