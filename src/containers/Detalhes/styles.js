import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 70vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  @media (max-width: 768px) {
    height: 60vh;
    background-position: center top;

    &::before {
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.85) 100%
      );
    }
  }

  @media (max-width: 480px) {
    height: 50vh;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1400px;
  margin: -150px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    max-width: 1200px;
    margin: -120px auto 0;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -80px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    margin-top: -60px;
    padding: 0 12px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: -50px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #ff6b6b;
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    top: -40px;
    left: 16px;
    padding: 10px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    top: -30px;
    left: 12px;
    padding: 8px 12px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
`;

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;

  img {
    border-radius: 20px;
    width: 320px;
    height: auto;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    animation: ${scale} 0.7s ease-in-out;
    transition: transform 0.3s ease;
    border: 3px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1024px) {
    padding: 16px;

    img {
      width: 280px;
    }
  }

  @media (max-width: 768px) {
    padding: 12px;

    img {
      width: 250px;
      border-radius: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px;

    img {
      width: 200px;
      border-radius: 12px;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

export const Info = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  z-index: 3;
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 100%;
  overflow: hidden;

  h1 {
    margin-bottom: 15px;
    font-size: 3.2rem;
    font-weight: 800;
    background: linear-gradient(45deg, #fff, #f0f0f0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    margin-left: 30px;
    padding: 16px;

    h1 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    padding: 16px 0;
    text-align: center;
    max-width: 100%;

    h1 {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    padding: 12px 0;

    h1 {
      font-size: 2rem;
      line-height: 1.1;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const TaglineText = styled.p`
  font-size: 1.3rem;
  color: #ff6b6b;
  font-style: italic;
  margin-bottom: 20px;
  font-weight: 500;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 12px;
    justify-content: space-between;

    /* Forçar quebra em 2 linhas se necessário */
    > * {
      flex: 1;
      min-width: calc(50% - 4px);
      max-width: calc(50% - 4px);
    }

    /* Se tiver 3 items, o último ocupa linha inteira */
    > *:nth-child(3) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 360px) {
    gap: 6px;

    /* Em telas muito pequenas, cada item em uma linha */
    flex-direction: column;

    > * {
      flex: none;
      min-width: 100%;
      max-width: 100%;
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 193, 7, 0.2);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.3);
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;
  text-align: center;

  span {
    font-size: 0.9rem;
    color: #ccc;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 1rem;
    border-radius: 16px;

    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.9rem;
    border-radius: 12px;
    flex: 1;
    max-width: 140px;

    span {
      font-size: 0.75rem;
      display: none; /* Ocultar contagem de votos em telas muito pequenas */
    }
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 0.8rem;
    max-width: 120px;
  }
`;

export const Duration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;
  text-align: center;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8rem;
    border-radius: 12px;
    gap: 4px;

    /* Garantir que a duração não quebre */
    min-width: fit-content;
    flex: 0 0 auto;
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 0.75rem;
    gap: 3px;
  }
`;

export const ReleaseDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;
  text-align: center;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8rem;
    border-radius: 12px;
    gap: 4px;

    /* Garantir que a data não quebre */
    min-width: fit-content;
    flex: 0 0 auto;
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 0.75rem;
    gap: 3px;
  }
`;

export const OverviewText = styled.p`
  margin: 25px 0;
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  hyphens: auto;

  @media (max-width: 768px) {
    margin: 20px 0;
    font-size: 1rem;
    text-align: left;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    margin: 16px 0;
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: left;
  }

  @media (max-width: 360px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
    margin: 25px 0;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin: 20px 0;
    flex-direction: column;
    align-items: center;
  }
`;

export const WatchButton = styled.button`
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 1rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 0.9rem;
    border-radius: 20px;
    width: 100%;
    max-width: 200px;
  }
`;

export const TrailerButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 15px 35px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #ff6b6b;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 1rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 0.9rem;
    border-radius: 20px;
    width: 100%;
    max-width: 200px;
  }
`;

export const MovieDetails = styled.div`
  max-width: 1400px;
  margin: 60px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 1024px) {
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 40px auto;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    margin: 30px auto;
    padding: 0 12px;
    gap: 20px;
  }
`;

export const DetailSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #ff6b6b;
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 16px;
    }

    > div {
      gap: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 12px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }

    > div {
      gap: 10px;
    }
  }
`;

export const DetailItem = styled.div`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  strong {
    color: white;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  @media (max-width: 360px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }
`;

export const ProductionInfo = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #ff6b6b;
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;

    > div {
      display: flex;
      align-items: center;
      gap: 15px;
      color: #e0e0e0;
      font-weight: 500;
      word-wrap: break-word;
      overflow-wrap: break-word;
      max-width: 100%;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 16px;
    }

    > div {
      gap: 12px;

      > div {
        gap: 12px;
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 12px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }

    > div {
      gap: 10px;

      > div {
        gap: 10px;
        font-size: 0.85rem;
        flex-direction: column;
        align-items: flex-start;

        span {
          white-space: normal;
          line-height: 1.3;
        }
      }
    }
  }

  @media (max-width: 360px) {
    padding: 12px;

    h3 {
      font-size: 1.1rem;
    }

    > div > div {
      font-size: 0.8rem;
    }
  }
`;

export const CompanyLogo = styled.div`
  img {
    height: 40px;
    max-width: 120px;
    object-fit: contain;
    filter: brightness(1.2) contrast(1.1);
    background: rgba(255, 255, 255, 0.9);
    padding: 5px 10px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    img {
      height: 32px;
      max-width: 100px;
      padding: 4px 8px;
      border-radius: 6px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 28px;
      max-width: 80px;
      padding: 3px 6px;
      border-radius: 4px;
    }
  }

  @media (max-width: 360px) {
    img {
      height: 24px;
      max-width: 70px;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  color: white;

  .spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid #ff6b6b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: 20px;

  h2 {
    font-size: 2.5rem;
    color: #ff6b6b;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 30px;
  }
`;
