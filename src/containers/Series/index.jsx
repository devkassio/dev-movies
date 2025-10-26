import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import {
  getAiringTodaySeries,
  getOnTheAirSeries,
  getPopularSeriesAll,
  getTopRatedSeries,
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  Container,
  EmptyState,
  FilterButton,
  FiltersContainer,
  FirstAirDate,
  Header,
  LoadingContainer,
  LoadMoreButton,
  Rating,
  SerieCard,
  SerieInfo,
  SerieMeta,
  SeriePoster,
  SeriesGrid,
} from './styles';

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedSerieId] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigate = useNavigate();

  const filters = [
    { key: 'popular', label: 'Populares', fetchFunction: getPopularSeriesAll },
    {
      key: 'top_rated',
      label: 'Melhores Avaliadas',
      fetchFunction: getTopRatedSeries,
    },
    { key: 'on_the_air', label: 'No Ar', fetchFunction: getOnTheAirSeries },
    {
      key: 'airing_today',
      label: 'Hoje no Ar',
      fetchFunction: getAiringTodaySeries,
    },
  ];

  const fetchSeries = async (filter, page = 1, append = false) => {
    setLoading(true);
    try {
      const filterObj = filters.find((f) => f.key === filter);
      const data = await filterObj.fetchFunction(page);

      if (data) {
        if (append) {
          // Filtrar duplicatas baseado no ID
          const existingIds = series.map((serie) => serie.id);
          const newSeries = data.results.filter(
            (serie) => !existingIds.includes(serie.id),
          );

          if (newSeries.length > 0) {
            setSeries((prev) => [...prev, ...newSeries]);
          }
        } else {
          setSeries(data.results);
        }
        setTotalPages(data.total_pages);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error('Error fetching series:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeries(activeFilter, 1);
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
            const existingIds = new Set(series.map((serie) => serie.id));
            const newSeries = data.results.filter(
              (serie) => !existingIds.has(serie.id),
            );

            if (newSeries.length > 0) {
              setSeries((prev) => [...prev, ...newSeries]);
              setCurrentPage(nextPage);
              setTotalPages(data.total_pages);
              foundNewContent = true;
            } else {
              nextPage++;
              attempts++;
            }
          } else {
            break;
          }
        } catch (error) {
          console.error('Error fetching more series:', error);
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

  const handleSerieClick = (serieId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(`/serie/${serieId}`);
    }, 300);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <Container>
      {showModal && (
        <Modal movieId={selectedSerieId} setShowModal={setShowModal} />
      )}

      <Header>
        <h1>📺 Séries</h1>
        <p>
          Explore o mundo das séries, desde dramas épicos até comédias
          envolventes
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

      {loading && series.length === 0 ? (
        <LoadingContainer>
          <div className="spinner"></div>
        </LoadingContainer>
      ) : series.length > 0 ? (
        <>
          <SeriesGrid>
            {series.map((serie) => (
              <SerieCard
                key={serie.id}
                onClick={() => handleSerieClick(serie.id)}
              >
                <SeriePoster>
                  <img
                    src={getImages(serie.poster_path)}
                    alt={serie.name}
                    onError={(e) => {
                      e.target.src = '/placeholder-movie.svg';
                    }}
                  />
                </SeriePoster>
                <SerieInfo>
                  <h3>{serie.name}</h3>
                  <p>{serie.overview}</p>
                  <SerieMeta>
                    <Rating>
                      <span>{serie.vote_average?.toFixed(1)}</span>
                    </Rating>
                    <FirstAirDate>
                      {serie.first_air_date && formatDate(serie.first_air_date)}
                    </FirstAirDate>
                  </SerieMeta>
                </SerieInfo>
              </SerieCard>
            ))}
          </SeriesGrid>

          {currentPage < totalPages && (
            <LoadMoreButton
              onClick={handleLoadMore}
              disabled={loading || loadingMore}
            >
              {loading || loadingMore ? 'Carregando...' : 'Carregar Mais'}
            </LoadMoreButton>
          )}

          {currentPage >= totalPages && series.length > 0 && (
            <div
              style={{ textAlign: 'center', margin: '50px 0', color: '#888' }}
            >
              <p>📺 Você explorou todas as séries desta categoria!</p>
              <p>Experimente outro filtro para descobrir mais conteúdo.</p>
            </div>
          )}
        </>
      ) : (
        <EmptyState>
          <h2>Nenhuma série encontrada</h2>
          <p>Tente selecionar um filtro diferente</p>
        </EmptyState>
      )}
    </Container>
  );
}

export default Series;
