import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'fb5a8efc74b4cfbb21e23283cbfdefb3',
  language: 'en-US',
};

export const fetchHomeMovList = async () => {
  const response = await axios.get('trending/all/day');
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data.results;
};

export const fetchMovieDetail = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data;
};

export const fetchCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data.cast;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data.results;
};

export const fetchSearchMovies = async movieQuery => {
  const response = await axios.get(`search/movie?query=${movieQuery}`);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data.results;
};
