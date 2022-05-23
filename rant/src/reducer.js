// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  loading: false,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  videos: [],
  loggingIn: true,
  loggedIn: true,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_VIDEOS":
      return {
        ...state,
        videos: action.videos,
      };
    case "SET_LOGGINGIN":
      return {
        ...state,
        loggingIn: action.loggingIn,
      };      
    case "SET_LOGGEDIN":
      return {
        ...state,
        loggedIn: action.loggedIn,
      };       
    default:
      return state;
  }
};

export default reducer;