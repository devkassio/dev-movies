import { useEffect, useState } from 'react';
import { getMovieVideos } from '../../services/getData';
import { Background, CloseModal, Container } from './styles';

export default function Modal({ movieId, setShowModal }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      setMovies(await getMovieVideos(movieId));
    }
    getMovies();
  }, [movieId]);

  return (
    <Background onClick={() => setShowModal(false)}>
      <CloseModal onClick={() => setShowModal(false)}>X</CloseModal>
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
