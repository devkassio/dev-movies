import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from '../../services/getData';
import { Container } from './styles';
export default function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
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
        .then(([movies, credits, videos, similar]) => {
          setMovies(movies);
          setMovieCredits(credits);
          setMovieVideos(videos);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return (
    <Container>
      <div>Detalhes</div>
    </Container>
  );
}
