import axios from 'axios';

const KEY = 'AIzaSyB_5ovfpa_xiDnyKW_wfwyC5rPQ3xkooVQ'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY,
    maxResults: 10
  }
})

