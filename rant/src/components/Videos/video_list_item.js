import React from 'react';


function VideoListItem (props) {
    const video =  props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li className="list-group-item">
        <div className="video-list media">
           <div className="media-left">
                <img className="media-object" src={imageUrl} alt=""/>
            </div>
            <div className="media-left">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
      </li>
    );
  }

export default VideoListItem;