import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Container, Li, Menu } from './styles';

export default function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (window.scrollY > 100) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  return (
    <Container $changeBackground={changeBackground}>
      <img src={Logo} alt="Logo-DevMovies" />
      <Menu>
        <Li $isActive={pathname === '/'}>
          {' '}
          {/* // $isActive corrijr depois */}
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
