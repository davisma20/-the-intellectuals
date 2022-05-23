import React, { useState, useEffect } from 'react';
import axios from '../library/axios'
import classes from './VidoBanner.module.css'
import requests from '../library/requests';
import { Button } from "@mui/material"



const VideoBanner = () => {
    const [movie, setMovie] = useState([]);
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    
    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
          }
          fetchData();
    }, []);
    return (
        <header 
            className={classes.banner}
            style={{
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`
            }}
            >
            <div className={classes.banner__contents}>
                <h1 className={classes.banner__title}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>   
                <div className={classes.banner__button__container}>
                    <button className={classes.banner__button}>Play</button>
                    <button className={classes.banner__button}>My List</button>
                    <Button color="primary" variant="contained"> Capture Data</Button>
                </div>
                <h1 className={classes.banner__description}>{truncate(movie?.overview, 250)}</h1>
            </div>
            <div className={classes.banner__fadeBottom} />
        </header>
    )
}
export default VideoBanner


