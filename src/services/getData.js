import api from './api';

export async function getMovies() {
  try {
    const {
      data: { results },
    } = await api.get('/movie/popular');
    return results[0];
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

export async function getTopMovies() {
  try {
    const {
      data: { results },
    } = await api.get('/movie/top_rated');
    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

export async function getTopSeries() {
  try {
    const {
      data: { results },
    } = await api.get('/tv/top_rated');
    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

export async function getPopularSeries() {
  try {
    const {
      data: { results },
    } = await api.get('/tv/popular');
    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

export async function getPersons() {
  try {
    const {
      data: { results },
    } = await api.get('/person/popular');
    return results;
  } catch (error) {
    console.error('Error fetching persons:', error);
  }
}

export async function getMovieVideos(movieId) {
  try {
    const {
      data: { results },
    } = await api.get(`/movie/${movieId}/videos`);
    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

export async function getMovieCredits(movieId) {
  try {
    const { data } = await api.get(`/movie/${movieId}/credits`);
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

export async function getMovieSimilar(movieId) {
  try {
    const {
      data: { results },
    } = await api.get(`/movie/${movieId}/similar`);
    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

export async function getMovieById(movieId) {
  try {
    const { data } = await api.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}
