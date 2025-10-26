import { getImages } from '../../utils/getImages';
import { Container, Title } from './styles';

export default function Credits({ movieCredits }) {
  return (
    <>
      <Title>Elenco Principal</Title>
      {movieCredits && movieCredits.length > 0 && (
        <Container>
          {movieCredits.slice(0, 5).map((credit) => (
            <div
              key={credit.id}
              title={`${credit.original_name} como ${credit.character || 'Personagem não informado'}`}
            >
              <img
                src={getImages(credit.profile_path)}
                alt={credit.name}
                onError={(e) => {
                  e.target.src = '/placeholder-person.svg';
                }}
              />
              <p>{credit.original_name || credit.name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}
