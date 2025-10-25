import { getImages } from '../../utils/getImages';
import { Container } from './styles';
export default function Card({ item }) {
  const title = item.title || item.name;
  const imagePath = item.poster_path || item.profile_path || '';

  return (
    <Container>
      <img src={getImages(imagePath)} alt={title} />
      <h3>{item.title || item.name}</h3>
    </Container>
  );
}
