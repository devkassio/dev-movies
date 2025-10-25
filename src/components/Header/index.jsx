import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Container, Li, Menu, SectionLink } from './styles';

export default function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Alterar background do header
      if (window.scrollY > 100) {
        setChangeBackground(true);
      } else {
        setChangeBackground(false);
      }

      // Detectar seção ativa apenas na página inicial
      if (pathname === '/') {
        const sections = ['home', 'movies', 'series'];
        const scrollPosition = window.scrollY + 200; // Offset para ativação antecipada

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Determinar qual seção está ativa
  const getActiveState = (section) => {
    if (pathname === '/') {
      return activeSection === section;
    }

    // Para outras rotas, usar pathname
    switch (section) {
      case 'home':
        return pathname === '/';
      case 'movies':
        return pathname === '/movies';
      case 'series':
        return pathname === '/series';
      default:
        return false;
    }
  };

  // Função para scroll suave até seção
  const scrollToSection = (sectionId) => {
    if (pathname === '/' && sectionId !== 'home') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <Container $changeBackground={changeBackground}>
      <img src={Logo} alt="Logo-DevMovies" />
      <Menu>
        <Li $isActive={getActiveState('home')}>
          <Link
            to="/"
            onClick={() =>
              pathname === '/' &&
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          >
            Home
          </Link>
        </Li>
        <Li $isActive={getActiveState('movies')}>
          {pathname === '/' ? (
            <SectionLink
              href="#movies"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('movies');
              }}
            >
              Filmes
            </SectionLink>
          ) : (
            <Link to="/movies">Filmes</Link>
          )}
        </Li>
        <Li $isActive={getActiveState('series')}>
          {pathname === '/' ? (
            <SectionLink
              href="#series"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('series');
              }}
            >
              Séries
            </SectionLink>
          ) : (
            <Link to="/series">Séries</Link>
          )}
        </Li>
      </Menu>
    </Container>
  );
}
