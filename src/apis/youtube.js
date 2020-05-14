import axios from 'axios';

const KEY = "AIzaSyDfHFnxePSEE2G_l3YObRs0g6xCsz2wRhY";

export const baseParams = {
  part: "snippet",
  type: 'video',
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});