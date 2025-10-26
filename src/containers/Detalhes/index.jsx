import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import { Background, Container, Cover, Info } from './styles';
import SpanGenres from '../../components/SpanGenres';
import Credits from '../../components/Credits';
export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
        getMovieById(id),
      ])
        .then(([videos, credits, similar, movieData]) => {
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
          setMovie(movieData);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, [id]);

  return (
    <>
      {movie && movie.backdrop_path && (
        <Background image={getImages(movie.backdrop_path)} />
      )}
      <Container>
        <Cover>
          {movie && movie.poster_path && (
            <img src={getImages(movie.poster_path)} alt={movie.title} />
          )}
        </Cover>
        <Info>
          <h1>{movie && movie.title}</h1>
          <SpanGenres genres={movie && movie.genres} />
          <p>{movie && movie.overview}</p>
          <Credits movieCredits={movieCredits} />
        </Info>
      </Container>
    </>
  );
}
