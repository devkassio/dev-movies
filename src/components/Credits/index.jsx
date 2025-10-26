import { getImages } from '../../utils/getImages';
import { Container, Title } from './styles';
export default function Credits({ movieCredits }) {
  return (
    <>
      <Title>Elenco:</Title>
      {movieCredits && (
        <Container>
          {movieCredits.slice(0, 5).map((credit) => (
            <div key={credit.id}>
              <img
                src={getImages(credit.profile_path)}
                alt={credit.name}
              />
              <p>{credit.original_name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}
