import axios from 'axios';

const API_KEY = '265284652100bb67997703a1d052ae84';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };

export async function fetchMoviesTrending() {
  const { data } = await axios.get('/trending/movie/week');
  return data;
}

export async function fetchMovieByQuery(query, page = 1) {
  const params = { query, language: 'en-US', page };
  const { data } = await axios.get('/search/movie', { params });
  return data;
}

export async function fetchMovieDetails(id) {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
}

export async function fetchMovieCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
}

export async function fetchMovieReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
}
