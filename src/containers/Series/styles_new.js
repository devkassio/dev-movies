import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  padding: 130px 20px 50px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 100%);

  @media (max-width: 768px) {
    padding: 100px 16px 40px;
  }

  @media (max-width: 480px) {
    padding: 90px 12px 30px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(45deg, #e74c3c, #8e44ad, #3498db);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientShift} 3s ease-in-out infinite;
    margin-bottom: 20px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.2rem;
    color: #b3b3b3;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px;

    h1 {
      font-size: 3rem;
      letter-spacing: 1.5px;
    }

    p {
      font-size: 1.1rem;
      max-width: 500px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;

    h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
      margin-bottom: 16px;
    }

    p {
      font-size: 1rem;
      max-width: 400px;
      padding: 0 16px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;

    h1 {
      font-size: 2rem;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }

    p {
      font-size: 0.9rem;
      max-width: 300px;
      padding: 0 8px;
      line-height: 1.5;
    }
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 40px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 30px;
    padding: 0 12px;
  }
`;

export const FilterButton = styled.button`
  background: ${(props) =>
    props.active
      ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
      : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: 2px solid
    ${(props) => (props.active ? '#e74c3c' : 'rgba(255, 255, 255, 0.2)')};
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(45deg, #e74c3c, #c0392b);
    border-color: #e74c3c;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    border-radius: 25px;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 16px rgba(231, 76, 60, 0.3);
    }
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
`;

export const SeriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 25px;
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    max-width: 100%;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
    padding: 0 12px;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const SerieCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    border-color: #e74c3c;
  }

  @media (max-width: 768px) {
    border-radius: 16px;

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 480px) {
    border-radius: 12px;

    &:hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const SeriePoster = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  }

  @media (max-width: 1024px) {
    height: 360px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 240px;
  }

  @media (max-width: 360px) {
    height: 200px;
  }
`;

export const SerieInfo = styled.div`
  padding: 20px;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 10px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: #b3b3b3;
    font-size: 0.9rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 16px;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }

    p {
      font-size: 0.8rem;
      -webkit-line-clamp: 2;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h3 {
      font-size: 1rem;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.75rem;
      -webkit-line-clamp: 2;
    }
  }
`;

export const SerieMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 193, 7, 0.2);
  padding: 5px 10px;
  border-radius: 15px;

  span {
    color: #ffc107;
    font-weight: 600;
    font-size: 0.9rem;
  }

  &::before {
    content: '⭐';
    font-size: 0.8rem;
  }
`;

export const FirstAirDate = styled.span`
  color: #888;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  .spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top: 3px solid #e74c3c;
    border-radius: 50%;
    animation: spin 1s linear infinite;
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

export const LoadMoreButton = styled.button`
  display: block;
  margin: 50px auto;
  background: linear-gradient(45deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    margin: 40px auto;
    padding: 12px 32px;
    font-size: 1rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    margin: 30px auto;
    padding: 10px 24px;
    font-size: 0.9rem;
    border-radius: 20px;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 100px 20px;

  h2 {
    font-size: 2rem;
    color: #666;
    margin-bottom: 20px;
  }

  p {
    color: #888;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 80px 16px;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 60px 12px;

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
