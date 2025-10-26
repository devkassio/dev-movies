import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Credits from '../../components/Credits';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import SpanGenres from '../../components/SpanGenres';
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
  getSeriesById,
  getSeriesCredits,
  getSeriesVideos,
  getSimilarSeries,
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  BackButton,
  Background,
  ButtonContainer,
  CompanyLogo,
  Container,
  Cover,
  DetailItem,
  DetailSection,
  Duration,
  ErrorContainer,
  Info,
  LoadingContainer,
  MetaInfo,
  MovieDetails,
  OverviewText,
  ProductionInfo,
  Rating,
  ReleaseDate,
  TaglineText,
  TrailerButton,
  WatchButton,
} from './styles';

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = window.location.pathname;
  const [content, setContent] = useState(null);
  const [videos, setVideos] = useState([]);
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMovie, setIsMovie] = useState(true);

  useEffect(() => {
    async function getAllData() {
      setLoading(true);
      setError(null);

      try {
        // Detectar o tipo baseado na URL
        const isSeries = location.includes('/serie/');
        const isMovieExplicit = location.includes('/movie/');

        if (isSeries) {
          // Forçar busca como série
          const [seriesVideos, seriesCredits, seriesSimilar, seriesData] =
            await Promise.all([
              getSeriesVideos(id),
              getSeriesCredits(id),
              getSimilarSeries(id),
              getSeriesById(id),
            ]);

          if (seriesData && seriesData.id) {
            setContent(seriesData);
            setVideos(seriesVideos || []);
            setCredits(seriesCredits || []);
            setSimilar(seriesSimilar || []);
            setIsMovie(false);
          } else {
            throw new Error('Série não encontrada');
          }
        } else if (isMovieExplicit) {
          // Forçar busca como filme
          const [movieVideos, movieCredits, movieSimilar, movieData] =
            await Promise.all([
              getMovieVideos(id),
              getMovieCredits(id),
              getMovieSimilar(id),
              getMovieById(id),
            ]);

          if (movieData && movieData.id) {
            setContent(movieData);
            setVideos(movieVideos || []);
            setCredits(movieCredits || []);
            setSimilar(movieSimilar || []);
            setIsMovie(true);
          } else {
            throw new Error('Filme não encontrado');
          }
        } else {
          // Lógica original para /detalhe/ (detectar automaticamente)
          // First try to get movie data
          let movieData, movieVideos, movieCredits, movieSimilar;
          let seriesData, seriesVideos, seriesCredits, seriesSimilar;

          try {
            [movieVideos, movieCredits, movieSimilar, movieData] =
              await Promise.all([
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
                getMovieById(id),
              ]);

            if (movieData && movieData.id) {
              setContent(movieData);
              setVideos(movieVideos || []);
              setCredits(movieCredits || []);
              setSimilar(movieSimilar || []);
              setIsMovie(true);
            } else {
              throw new Error('Movie not found');
            }
          } catch (movieError) {
            // If movie fails, try series
            try {
              [seriesVideos, seriesCredits, seriesSimilar, seriesData] =
                await Promise.all([
                  getSeriesVideos(id),
                  getSeriesCredits(id),
                  getSimilarSeries(id),
                  getSeriesById(id),
                ]);

              if (seriesData && seriesData.id) {
                setContent(seriesData);
                setVideos(seriesVideos || []);
                setCredits(seriesCredits || []);
                setSimilar(seriesSimilar || []);
                setIsMovie(false);
              } else {
                throw new Error('Content not found');
              }
            } catch (seriesError) {
              throw new Error('Conteúdo não encontrado');
            }
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getAllData();
    }
  }, [id, location]);

  const formatRuntime = (minutes) => {
    if (!minutes) return '';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount) => {
    if (!amount) return '';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <div className="spinner"></div>
        <p>Carregando detalhes...</p>
      </LoadingContainer>
    );
  }

  if (error || !content) {
    return (
      <ErrorContainer>
        <h2>😔 Ops!</h2>
        <p>{error || 'Conteúdo não encontrado'}</p>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </ErrorContainer>
    );
  }

  const title = isMovie ? content.title : content.name;
  const releaseDate = isMovie ? content.release_date : content.first_air_date;

  return (
    <>
      {showModal && (
        <Modal
          movieId={isMovie ? content.id : null}
          seriesId={!isMovie ? content.id : null}
          setShowModal={setShowModal}
        />
      )}

      {content.backdrop_path && (
        <Background image={getImages(content.backdrop_path)} />
      )}

      <Container>
        <BackButton onClick={() => navigate(-1)}>← Voltar</BackButton>

        <Cover>
          {content.poster_path && (
            <img src={getImages(content.poster_path)} alt={title} />
          )}
        </Cover>

        <Info>
          <h1>{title}</h1>

          {content.tagline && <TaglineText>"{content.tagline}"</TaglineText>}

          <MetaInfo>
            <Rating>
              ⭐ {content.vote_average?.toFixed(1)}/10
              <span>({content.vote_count} votos)</span>
            </Rating>

            {isMovie && content.runtime && (
              <Duration>⏱️ {formatRuntime(content.runtime)}</Duration>
            )}

            {!isMovie && content.number_of_seasons && (
              <Duration>
                📺 {content.number_of_seasons} temporada
                {content.number_of_seasons > 1 ? 's' : ''}
              </Duration>
            )}

            <ReleaseDate>📅 {formatDate(releaseDate)}</ReleaseDate>
          </MetaInfo>

          <SpanGenres genres={content.genres} />

          <OverviewText>{content.overview}</OverviewText>

          <ButtonContainer>
            <WatchButton onClick={() => navigate('/')}>
              ▶️ Assistir Agora
            </WatchButton>

            {videos.length > 0 && (
              <TrailerButton onClick={() => setShowModal(true)}>
                🎬 Ver Trailer
              </TrailerButton>
            )}
          </ButtonContainer>

          <Credits movieCredits={credits} />
        </Info>
      </Container>

      <MovieDetails>
        <DetailSection>
          <h3>📊 Informações Detalhadas</h3>
          <div>
            <DetailItem>
              <strong>Status:</strong> {content.status}
            </DetailItem>

            <DetailItem>
              <strong>Idioma Original:</strong>{' '}
              {content.original_language?.toUpperCase()}
            </DetailItem>

            {isMovie && (
              <>
                <DetailItem>
                  <strong>Orçamento:</strong>{' '}
                  {content.budget
                    ? formatCurrency(content.budget)
                    : 'Não informado'}
                </DetailItem>

                <DetailItem>
                  <strong>Receita:</strong>{' '}
                  {content.revenue
                    ? formatCurrency(content.revenue)
                    : 'Não informado'}
                </DetailItem>
              </>
            )}

            {!isMovie && (
              <>
                <DetailItem>
                  <strong>Episódios:</strong>{' '}
                  {content.number_of_episodes || 'Não informado'}
                </DetailItem>

                <DetailItem>
                  <strong>Última exibição:</strong>{' '}
                  {content.last_air_date
                    ? formatDate(content.last_air_date)
                    : 'Não informado'}
                </DetailItem>

                {content.networks && content.networks.length > 0 && (
                  <DetailItem>
                    <strong>Redes:</strong>{' '}
                    {content.networks.map((network) => network.name).join(', ')}
                  </DetailItem>
                )}
              </>
            )}
          </div>
        </DetailSection>

        {content.production_companies &&
          content.production_companies.length > 0 && (
            <ProductionInfo>
              <h3>🏢 Produção</h3>
              <div>
                {content.production_companies.map((company) => (
                  <div key={company.id}>
                    {company.logo_path && (
                      <CompanyLogo>
                        <img
                          src={getImages(company.logo_path)}
                          alt={company.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </CompanyLogo>
                    )}
                    <span>{company.name}</span>
                  </div>
                ))}
              </div>
            </ProductionInfo>
          )}
      </MovieDetails>

      {similar && similar.length > 0 && (
        <Slider
          info={similar}
          title={isMovie ? 'Filmes Similares' : 'Séries Similares'}
          contentType={isMovie ? 'movie' : 'series'}
        />
      )}
    </>
  );
}
