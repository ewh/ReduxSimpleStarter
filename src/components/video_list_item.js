import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const {snippet} = video;
  const imageUrl = snippet.thumbnails.default.url;
  // console.log(snippet.title);

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-item media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
