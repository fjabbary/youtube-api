import React from 'react'

export default function VideoDetails({ oneVideo }) {

  if (!oneVideo) {
    return <p>Results</p>
  }

  const url = `https://www.youtube.com/embed/${oneVideo.id.videoId}`

  return (
    <div style={{ border: '1px solid #aaa', padding: '40px', background: '#eee' }}>
      <iframe src={url} frameBorder="0" style={{ width: '100%', height: '50vh' }}></iframe>
      <h2>{oneVideo.snippet.title}</h2>
      <p> {oneVideo.snippet.description} </p>
    </div>
  )
}
