import { useNavigate } from 'react-router-dom';
import { getImages } from '../../utils/getImages';
import { Container } from './styles';

export default function Card({ item, contentType }) {
  const navigate = useNavigate();
  const title = item.title || item.name;
  const imagePath = item.poster_path || item.profile_path || '';

  const handleClick = () => {
    // Se tem poster_path é um filme/série, se tem profile_path é uma pessoa
    if (item.poster_path) {
      // Scroll to top before navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Small delay to allow smooth scroll
      setTimeout(() => {
        // Determinar a rota baseada no tipo ou fallback para detecção automática
        let route = `/detalhe/${item.id}`;

        if (contentType === 'movie') {
          route = `/movie/${item.id}`;
        } else if (contentType === 'series') {
          route = `/serie/${item.id}`;
        } else if (item.name && !item.title) {
          // Se tem 'name' mas não 'title', provavelmente é série
          route = `/serie/${item.id}`;
        } else if (item.title && !item.name) {
          // Se tem 'title' mas não 'name', provavelmente é filme
          route = `/movie/${item.id}`;
        }

        navigate(route);
      }, 300);
    }
    // Para pessoas (artistas), não navegamos para detalhes por enquanto
  };

  const isClickable = item.poster_path; // Só é clicável se for filme/série

  return (
    <Container
      onClick={isClickable ? handleClick : undefined}
      $isClickable={isClickable}
    >
      <img
        src={getImages(imagePath)}
        alt={title}
        onError={(e) => {
          // Se tem profile_path é uma pessoa, senão é filme/série
          e.target.src = item.profile_path
            ? '/placeholder-person.svg'
            : '/placeholder-movie.svg';
        }}
      />
      <h3>{title}</h3>
    </Container>
  );
}
