import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Container, Li, Menu } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo-DevMovies" />
      <Menu>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/movies">Filmes</Link>
        </Li>
        <Li>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  );
}
