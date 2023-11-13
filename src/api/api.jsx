import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'fb5a8efc74b4cfbb21e23283cbfdefb3',
};

export const fetchHomeMovList = async () => {
  const response = await axios.get('trending/all/day');
  const { data } = response;
  console.log(data);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data.results;
};

export const getMovie = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data.results;
};
