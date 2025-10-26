import { useEffect, useState } from 'react';
import { getMovieVideos, getSeriesVideos } from '../../services/getData';
import {
  Background,
  CloseModal,
  Container,
  ErrorMessage,
  FullscreenButton,
  LoadingSpinner,
  QualityButton,
  VideoContainer,
  VideoControls,
  VideoDescription,
  VideoInfo,
  VideoTitle,
} from './styles';

export default function Modal({ movieId, seriesId, setShowModal }) {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    async function getVideos() {
      setLoading(true);
      setError(null);

      try {
        let videoData;
        if (movieId) {
          videoData = await getMovieVideos(movieId);
        } else if (seriesId) {
          videoData = await getSeriesVideos(seriesId);
        }

        if (videoData && videoData.length > 0) {
          setVideos(videoData);
          // Prioriza trailers oficiais
          const trailer =
            videoData.find(
              (video) => video.type === 'Trailer' && video.official,
            ) ||
            videoData.find((video) => video.type === 'Trailer') ||
            videoData[0];

          setCurrentVideo(trailer);
        } else {
          setError('Nenhum trailer disponível para este conteúdo.');
        }
      } catch (err) {
        setError('Erro ao carregar o trailer. Tente novamente.');
      } finally {
        setLoading(false);
      }
    }

    if (movieId || seriesId) {
      getVideos();
    }
  }, [movieId, seriesId]);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
  };

  const toggleFullscreen = () => {
    const videoContainer = document.getElementById('video-container');

    if (!isFullscreen) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
      } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setShowModal]);

  return (
    <Background onClick={handleBackgroundClick}>
      <CloseModal onClick={() => setShowModal(false)} aria-label="Fechar modal">
        ✕
      </CloseModal>

      <Container>
        {loading ? (
          <LoadingSpinner>
            <div className="spinner"></div>
            <p>Carregando trailer...</p>
          </LoadingSpinner>
        ) : error ? (
          <ErrorMessage>
            <h3>😔 Ops!</h3>
            <p>{error}</p>
          </ErrorMessage>
        ) : currentVideo ? (
          <>
            <VideoContainer id="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.key}?autoplay=1&rel=0&modestbranding=1`}
                title={currentVideo.name || 'Trailer'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <VideoControls>
                <FullscreenButton
                  onClick={toggleFullscreen}
                  aria-label="Tela cheia"
                >
                  {isFullscreen ? '⛶' : '⛶'}
                </FullscreenButton>
              </VideoControls>
            </VideoContainer>

            <VideoInfo>
              <VideoTitle>{currentVideo.name}</VideoTitle>
              <VideoDescription>
                Tipo: {currentVideo.type} | Qualidade: {currentVideo.size}p |
                {currentVideo.official ? ' Oficial' : ' Não oficial'}
              </VideoDescription>

              {videos.length > 1 && (
                <div style={{ marginTop: '15px' }}>
                  <h4
                    style={{
                      color: 'white',
                      marginBottom: '10px',
                      fontSize: '1rem',
                    }}
                  >
                    Outros vídeos disponíveis:
                  </h4>
                  <div
                    style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
                  >
                    {videos.map((video) => (
                      <QualityButton
                        key={video.id}
                        active={currentVideo.id === video.id}
                        onClick={() => handleVideoChange(video)}
                      >
                        {video.type} {video.size && `(${video.size}p)`}
                      </QualityButton>
                    ))}
                  </div>
                </div>
              )}
            </VideoInfo>
          </>
        ) : (
          <ErrorMessage>
            <h3>😔 Ops!</h3>
            <p>Nenhum trailer disponível para este conteúdo.</p>
          </ErrorMessage>
        )}
      </Container>
    </Background>
  );
}
