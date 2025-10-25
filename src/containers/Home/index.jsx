import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import api from '../../services/api';
import { getImages } from '../../utils/getImages';
import { Background, Container, Info, Poster } from './styles';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function getMovies() {
      // Filme Principal
      try {
        const {
          data: { results },
        } = await api.get('/movie/popular'); // API de Filmes Populares
        setMovies(results[0]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    async function getTopMovies() {
      // Top Filmes
      try {
        const {
          data: { results },
        } = await api.get('/movie/top_rated'); // API Top Filmes
        setTopMovies(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    async function getTopSeries() {
      // Top Series
      try {
        const {
          data: { results },
        } = await api.get('/tv/top_rated'); // API Top Series
        setTopSeries(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    async function getPopularSeries() {
      // Series Populares
      try {
        const {
          data: { results },
        } = await api.get('/tv/popular'); // API Series Populares
        setPopularSeries(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    async function getPersons() {
      // Pessoas Populares
      try {
        const {
          data: { results },
        } = await api.get('/person/popular'); // Personagens Populares
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
        <Background img={getImages(movies.backdrop_path)}>
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <div>
                <Button red>Assistir agora</Button>
                <Button>Assistir o trailer</Button>
              </div>
            </Info>
            <Poster>
              <img src={getImages(movies.poster_path)} alt={movies.title} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && topMovies.length > 0 && (
        <Slider info={topMovies} title="Top Filmes" />
      )}
      {topSeries && topSeries.length > 0 && (
        <Slider info={topSeries} title="Top Series" />
      )}
      {popularSeries && popularSeries.length > 0 && (
        <Slider info={popularSeries} title="Series Populares" />
      )}
      {persons && persons.length > 0 && (
        <Slider info={persons} title="Artistas Populares" />
      )}
    </div>
  );
}
