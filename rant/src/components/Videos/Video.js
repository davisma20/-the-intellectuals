// import SearchBar from '../UI/Search_bar';
// import Nav from '../UI/Nav';

import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';
import Row from '../UI/Row';
import requests from '../library/requests';
import VideoBanner from '../UI/VideoBanner';
import classes from './Video.module.css';
// import { useStateValue } from "./StateProvider";


const API_KEY = process.env.REACT_APP_YouTubeSearch;
 
const Video = (props) => {
    // const [{ playlists }, dispatch] = useStateValue();

    const [state, setState] = useState({videos: [] });
    const [isLargeRow] = useState(true);

    useEffect(() => {
        const videoSearch = (term) => {
            const YTSearchInfo = {
                key: API_KEY, 
                term: term
            };
            YTSearch(YTSearchInfo, (data) => {
                setState(state.videos = data)
          });
        }
            videoSearch('Training');
        }, [state.videos]);
        
    return (
      <div className={classes.Video_wrapper} >
         {/*<Nav />*/}
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



