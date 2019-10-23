import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube'
import VideosList from './components/VideosList';
import VideoDetails from './components/VideoDetails';

export default class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
  }

  onSelectedVideo = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  submitHandler = async (term) => {
    const termResults = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: termResults.data.items,
      selectedVideo: termResults.data.items[0]
    })

  }

  render() {
    return (
      <div className="App">
        <SearchBar submit={this.submitHandler} />
        <div className="parent">
          <div className="left">
            <VideoDetails oneVideo={this.state.selectedVideo} />
          </div>
          <div className="right">
            <VideosList videos={this.state.videos} selectedVideo={this.onSelectedVideo} />
          </div>
        </div>

      </div>
    )
  }
}


