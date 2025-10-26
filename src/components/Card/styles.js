import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.$isClickable ? 'pointer' : 'default')};
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  max-width: 280px;

  &:hover {
    transform: ${(props) =>
      props.$isClickable ? 'translateY(-10px) scale(1.05)' : 'none'};
  }

  img {
    border-radius: 20px;
    width: 100%;
    max-width: 280px;
    height: auto;
    aspect-ratio: 2/3;
    object-fit: cover;
    margin-left: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    ${(props) =>
      props.$isClickable &&
      `
      &:hover {
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        filter: brightness(1.1);
      }
    `}
  }

  h3 {
    margin-top: 15px;
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    line-height: 1.4;
    padding: 0 5px;

    ${(props) =>
      props.$isClickable &&
      `
      &:hover {
        color: #ff6b6b;
      }
    `}
  }

  @media (max-width: 1024px) {
    max-width: 240px;
    padding: 8px;

    img {
      max-width: 240px;
      margin-left: 8px;
    }

    h3 {
      font-size: 1rem;
      margin-top: 12px;
    }
  }

  @media (max-width: 768px) {
    max-width: 220px;
    padding: 8px;

    img {
      max-width: 220px;
      margin-left: 6px;
      border-radius: 16px;
    }

    h3 {
      font-size: 0.95rem;
      margin-top: 10px;
      font-weight: 600;
    }

    &:hover {
      transform: ${(props) =>
        props.$isClickable ? 'translateY(-8px) scale(1.03)' : 'none'};
    }
  }

  /* Estilo Netflix para Mobile */
  @media (max-width: 480px) {
    max-width: 180px;
    padding: 6px;
    min-width: 160px;

    img {
      max-width: 180px;
      min-width: 160px;
      margin-left: 0;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }

    h3 {
      font-size: 0.9rem;
      margin-top: 8px;
      line-height: 1.3;
      font-weight: 600;
      color: #fff;
    }

    &:hover {
      transform: ${(props) =>
        props.$isClickable ? 'translateY(-5px) scale(1.02)' : 'none'};
    }
  }

  /* Mobile muito pequeno - estilo Netflix compacto */
  @media (max-width: 360px) {
    max-width: 150px;
    min-width: 140px;
    padding: 4px;

    img {
      max-width: 150px;
      min-width: 140px;
      border-radius: 10px;
    }

    h3 {
      font-size: 0.85rem;
      margin-top: 6px;
      line-height: 1.2;
    }
  }
`;
