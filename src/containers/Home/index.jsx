import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import api from '../../services/api';
import { getImages } from '../../utils/getImages';
import { Background, Container, Info, Poster, Section } from './styles';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [persons, setPersons] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      try {
        const {
          data: { results },
        } = await api.get('/movie/popular');
        setMovies(results[0]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    async function getTopMovies() {
      try {
        const {
          data: { results },
        } = await api.get('/movie/top_rated');
        setTopMovies(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    async function getTopSeries() {
      try {
        const {
          data: { results },
        } = await api.get('/tv/top_rated');
        setTopSeries(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    async function getPopularSeries() {
      try {
        const {
          data: { results },
        } = await api.get('/tv/popular');
        setPopularSeries(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    async function getPersons() {
      try {
        const {
          data: { results },
        } = await api.get('/person/popular');
        setPersons(results);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPopularSeries();
    getPersons();
  }, []);

  return (
    <div>
      {movies && (
        <Section id="home">
          <Background img={getImages(movies.backdrop_path)}>
            {showModal && (
              <Modal movieId={movies.id} setShowModal={setShowModal} />
            )}
            <Container>
              <Info>
                <h1>{movies.title}</h1>
                <p>{movies.overview}</p>
                <div>
                  <Button red onClick={() => navigate(`/detalhe/${movies.id}`)}>Assistir agora</Button>
                  <Button onClick={() => setShowModal(true)}>
                    Assistir o trailer
                  </Button>
                </div>
              </Info>
              <Poster>
                <img src={getImages(movies.poster_path)} alt={movies.title} />
              </Poster>
            </Container>
          </Background>
        </Section>
      )}
      <Section id="movies">
        {topMovies && topMovies.length > 0 && (
          <Slider info={topMovies} title="Top Filmes" />
        )}
      </Section>
      <Section id="series">
        {topSeries && topSeries.length > 0 && (
          <Slider info={topSeries} title="Top Séries" />
        )}
        {popularSeries && popularSeries.length > 0 && (
          <Slider info={popularSeries} title="Séries Populares" />
        )}
      </Section>
      <Section id="artists">
        {persons && persons.length > 0 && (
          <Slider info={persons} title="Artistas Populares" />
        )}
      </Section>
    </div>
  );
}
