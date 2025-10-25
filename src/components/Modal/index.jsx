import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Background, Container, CloseButton } from './styles';

export default function Modal({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function getMovieVideos() {
      try {
        setLoading(true);
        setError(null);
        
        const {
          data: { results },
        } = await api.get(`/movie/${movieId}/videos`);
        
        // Busca o primeiro vídeo do YouTube
        const youtubeVideo = results.find(
          video => video.site === 'YouTube' && video.type === 'Trailer'
        ) || results[0];
        
        setMovie(youtubeVideo);
      } catch (error) {
        console.error('Error fetching movie videos:', error);
        setError('Erro ao carregar vídeo');
      } finally {
        setLoading(false);
      }
    }

    getMovieVideos();
  }, [movieId]);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget && onClose) {
      onClose();
    }
  };

  if (loading) {
    return (
      <Background onClick={handleBackgroundClick}>
        <Container>
          <CloseButton onClick={onClose}>×</CloseButton>
          <div>
            Carregando vídeo...
          </div>
        </Container>
      </Background>
    );
  }

  if (error || !movie?.key) {
    return (
      <Background onClick={handleBackgroundClick}>
        <Container>
          <CloseButton onClick={onClose}>×</CloseButton>
          <div>
            {error || 'Vídeo não disponível'}
          </div>
        </Container>
      </Background>
    );
  }

  return (
    <Background onClick={handleBackgroundClick}>
      <Container>
        <CloseButton onClick={onClose}>×</CloseButton>
        <iframe
          src={`https://www.youtube.com/embed/${movie.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </Background>
  );
}
