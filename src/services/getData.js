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
    const {
      data: { cast },
    } = await api.get(`/movie/${movieId}/credits`);
    return cast;
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

// Movies
export async function getPopularMovies(page = 1) {
  try {
    const { data } = await api.get(`/movie/popular?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
}

export async function getNowPlayingMovies(page = 1) {
  try {
    const { data } = await api.get(`/movie/now_playing?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
  }
}

export async function getUpcomingMovies(page = 1) {
  try {
    const { data } = await api.get(`/movie/upcoming?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
  }
}

export async function getTopRatedMovies(page = 1) {
  try {
    const { data } = await api.get(`/movie/top_rated?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
  }
}

// Series
export async function getAiringTodaySeries(page = 1) {
  try {
    const { data } = await api.get(`/tv/airing_today?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error fetching airing today series:', error);
  }
}

export async function getOnTheAirSeries(page = 1) {
  try {
    const { data } = await api.get(`/tv/on_the_air?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error fetching on the air series:', error);
  }
}

export async function getPopularSeriesAll(page = 1) {
  try {
    const { data } = await api.get(`/tv/popular?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error fetching popular series:', error);
  }
}

export async function getTopRatedSeries(page = 1) {
  try {
    const { data } = await api.get(`/tv/top_rated?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error fetching top rated series:', error);
  }
}

// Get series by ID
export async function getSeriesById(seriesId) {
  try {
    const { data } = await api.get(`/tv/${seriesId}`);
    return data;
  } catch (error) {
    console.error('Error fetching series:', error);
  }
}

// Get series videos
export async function getSeriesVideos(seriesId) {
  try {
    const {
      data: { results },
    } = await api.get(`/tv/${seriesId}/videos`);
    return results;
  } catch (error) {
    console.error('Error fetching series videos:', error);
  }
}

// Get series credits
export async function getSeriesCredits(seriesId) {
  try {
    const {
      data: { cast },
    } = await api.get(`/tv/${seriesId}/credits`);
    return cast;
  } catch (error) {
    console.error('Error fetching series credits:', error);
  }
}

// Get similar series
export async function getSimilarSeries(seriesId) {
  try {
    const {
      data: { results },
    } = await api.get(`/tv/${seriesId}/similar`);
    return results;
  } catch (error) {
    console.error('Error fetching similar series:', error);
  }
}
