import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Background, Container } from './styles';

export default function Modal({ movieId, setShowModal }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const {
          data: { results },
        } = await api.get(`/movie/${movieId}/videos`);
        setMovies(results[0]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    getMovies();
  }, [movieId]);

  return (
    <Background onClick={() => setShowModal(false)}>
      <Container>
        <iframe
          src={`https://www.youtube.com/embed/${movies.key}`}
          title="YouTube video player"
          height="500px"
          width="70%"
        ></iframe>
      </Container>
    </Background>
  );
}
