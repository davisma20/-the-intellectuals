import React, { useEffect } from 'react';
import YTSearch from 'youtube-api-search';
import Row from '../UI/Row';
import requests from '../library/requests';
import VideoBanner from '../UI/VideoBanner';
import classes from './Video.module.css';
import { useStateValue } from "../../StateProvider";

const API_KEY = process.env.REACT_APP_YouTubeSearch;
const Video = (props) => {
    const [{videos}, dispatch] = useStateValue();
    useEffect(() => {
        const videoSearch = (term) => {
            const YTSearchInfo = {
                key: API_KEY, 
                term: term
            };
            YTSearch(YTSearchInfo, (data) => {
              dispatch({
                type: "SET_VIDEOS",
                videos: data,
              });
          });
        }
        videoSearch('Training');
        }, [dispatch]);
        console.log(videos);

    return (
        <div className={classes.Video_wrapper} >
            <VideoBanner />
            <div >
                <Row 
                    title="RANT ORIGINALS"
                    fetchUrl={ requests.fetchNetflixOriginals }
                    isLargeRow={ true }
                    />
                <Row title="Trending Now " fetchUrl={ requests.fetchTrending }/>
                <Row title="Action Movies " fetchUrl={ requests.fetchActionMovies }/>
                <Row title="Comedy Movies " fetchUrl={ requests.fetchComedyMovies }/>
                <Row title="Horror Movies " fetchUrl={ requests.fetchHorrorMovies }/>
                <Row title="Romance Movies " fetchUrl={ requests.fetchRomanceMovies }/>
                <Row title="Documentaries " fetchUrl={ requests.fetchDocumentaries }/>
                <Row title="Top Rates " fetchUrl={ requests.fetchTopRated }/>
            </div>
      </div>
    );
  }
export default Video;



