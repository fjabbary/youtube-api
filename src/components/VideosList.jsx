import React from 'react'
import VideoItem from './VideoItem'

export default function VideosList(props) {

  const vdieoItemJSX = props.videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} selectedVideo={props.selectedVideo} />
  })

  return (
    <div className="ui list">
      {vdieoItemJSX}
    </div>
  )
}
