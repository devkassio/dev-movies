import api from '../../services/api';

function Home() {
  async function getMovies() {
    try {
      const response = await api.get('/movie/popular');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  getMovies();

  return (
    <div>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the application.</p>
      </div>
      {/* <Banner>
        <h2>Special Offer!</h2>
        <p>Get 50% off on your first purchase. Limited time only!</p>
      </Banner> */}
    </div>
  );
}

export default Home;
