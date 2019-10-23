import React from 'react'
import './styles/videoItem.css'

export default function VideoItem({ video, selectedVideo }) {
  return (
    <div className="item" onClick={selectedVideo.bind(this, video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />

      <div className="content">
        <a href="#" className="header">{video.snippet.title.substr(0, 50)}</a>
      </div>
    </div>
  )
}

