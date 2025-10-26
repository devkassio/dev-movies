import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  Container,
  EmptyState,
  FilterButton,
  FiltersContainer,
  Header,
  LoadingContainer,
  LoadMoreButton,
  MovieCard,
  MovieInfo,
  MovieMeta,
  MoviePoster,
  MoviesGrid,
  Rating,
  ReleaseDate,
} from './styles';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieId] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigate = useNavigate();

  const filters = [
    { key: 'popular', label: 'Populares', fetchFunction: getPopularMovies },
    {
      key: 'top_rated',
      label: 'Melhores Avaliados',
      fetchFunction: getTopRatedMovies,
    },
    {
      key: 'now_playing',
      label: 'Em Cartaz',
      fetchFunction: getNowPlayingMovies,
    },
    { key: 'upcoming', label: 'Em Breve', fetchFunction: getUpcomingMovies },
  ];

  const fetchMovies = async (filter, page = 1, append = false) => {
    setLoading(true);
    try {
      const filterObj = filters.find((f) => f.key === filter);
      const data = await filterObj.fetchFunction(page);

      if (data) {
        if (append) {
          // Filtrar duplicatas baseado no ID
          const existingIds = movies.map((movie) => movie.id);
          const newMovies = data.results.filter(
            (movie) => !existingIds.includes(movie.id),
          );

          if (newMovies.length > 0) {
            setMovies((prev) => [...prev, ...newMovies]);
          }
        } else {
          setMovies(data.results);
        }
        setTotalPages(data.total_pages);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(activeFilter, 1);
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    if (filter !== activeFilter) {
      setActiveFilter(filter);
      setCurrentPage(1);
    }
  };

  const handleLoadMore = async () => {
    if (currentPage < totalPages && !loading && !loadingMore) {
      setLoadingMore(true);
      let nextPage = currentPage + 1;
      let attempts = 0;
      const maxAttempts = 3;
      let foundNewContent = false;

      while (
        attempts < maxAttempts &&
        nextPage <= totalPages &&
        !foundNewContent
      ) {
        try {
          const filterObj = filters.find((f) => f.key === activeFilter);
          const data = await filterObj.fetchFunction(nextPage);

          if (data && data.results) {
            // Filtrar duplicatas rigorosamente
            const existingIds = new Set(movies.map((movie) => movie.id));
            const newMovies = data.results.filter(
              (movie) => !existingIds.has(movie.id),
            );

            if (newMovies.length > 0) {
              setMovies((prev) => [...prev, ...newMovies]);
              setCurrentPage(nextPage);
              setTotalPages(data.total_pages);
              foundNewContent = true;
            } else {
              console.log(
                `Página ${nextPage} tem duplicatas, tentando próxima...`,
              );
              nextPage++;
              attempts++;
            }
          } else {
            break;
          }
        } catch (error) {
          console.error('Error fetching more movies:', error);
          break;
        }
      }

      // Se tentou todas as páginas possíveis e não encontrou conteúdo novo
      if (!foundNewContent) {
        setCurrentPage(totalPages); // Marca como finalizado
      }

      setLoadingMore(false);
    }
  };

  const handleMovieClick = (movieId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(`/detalhe/${movieId}`);
    }, 300);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <Container>
      {showModal && (
        <Modal movieId={selectedMovieId} setShowModal={setShowModal} />
      )}

      <Header>
        <h1>🎬 Filmes</h1>
        <p>
          Descubra os melhores filmes, desde os mais populares até os clássicos
          atemporais
        </p>
      </Header>

      <FiltersContainer>
        {filters.map((filter) => (
          <FilterButton
            key={filter.key}
            active={activeFilter === filter.key}
            onClick={() => handleFilterChange(filter.key)}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FiltersContainer>

      {loading && movies.length === 0 ? (
        <LoadingContainer>
          <div className="spinner"></div>
        </LoadingContainer>
      ) : movies.length > 0 ? (
        <>
          <MoviesGrid>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
              >
                <MoviePoster>
                  <img
                    src={getImages(movie.poster_path)}
                    alt={movie.title}
                    onError={(e) => {
                      e.target.src = '/placeholder-movie.svg';
                    }}
                  />
                </MoviePoster>
                <MovieInfo>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <MovieMeta>
                    <Rating>
                      <span>{movie.vote_average?.toFixed(1)}</span>
                    </Rating>
                    <ReleaseDate>
                      {movie.release_date && formatDate(movie.release_date)}
                    </ReleaseDate>
                  </MovieMeta>
                </MovieInfo>
              </MovieCard>
            ))}
          </MoviesGrid>

          {currentPage < totalPages && (
            <LoadMoreButton
              onClick={handleLoadMore}
              disabled={loading || loadingMore}
            >
              {loading || loadingMore ? 'Carregando...' : 'Carregar Mais'}
            </LoadMoreButton>
          )}

          {currentPage >= totalPages && movies.length > 0 && (
            <div
              style={{ textAlign: 'center', margin: '50px 0', color: '#888' }}
            >
              <p>🎬 Você explorou todos os filmes desta categoria!</p>
              <p>Experimente outro filtro para descobrir mais conteúdo.</p>
            </div>
          )}
        </>
      ) : (
        <EmptyState>
          <h2>Nenhum filme encontrado</h2>
          <p>Tente selecionar um filtro diferente</p>
        </EmptyState>
      )}
    </Container>
  );
}

export default Movies;
