import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import {
  getMovies,
  getPersons,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
} from '../../services/getData';
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
    async function getAllData() {
      setMovies(await getMovies());
      setTopMovies(await getTopMovies());
      setTopSeries(await getTopSeries());
      setPopularSeries(await getPopularSeries());
      setPersons(await getPersons());
    }

    getAllData();
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
                  <Button red onClick={() => navigate(`/detalhe/${movies.id}`)}>
                    Assistir agora
                  </Button>
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
