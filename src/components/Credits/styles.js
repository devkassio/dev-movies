import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  /* Estilo da scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff6b6b;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ee5a52;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
    }
  }

  img {
    margin-top: 10px;
    border-radius: 15px;
    width: 150px;
    height: 180px;
    object-fit: cover;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.1);

    &:hover {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
      border-color: #ff6b6b;
    }

    &:error {
      background: linear-gradient(45deg, #2c3e50, #34495e);
    }
  }

  p {
    color: #fff;
    text-align: center;
    margin-top: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.3;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6b6b;
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 16px;
    padding-bottom: 8px;

    div {
      min-width: 100px;

      &:hover {
        transform: translateY(-3px);
      }
    }

    img {
      width: 120px;
      height: 150px;
      border-radius: 12px;
    }

    p {
      font-size: 0.8rem;
      max-width: 100px;
      margin-top: 8px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 12px;
    padding-bottom: 6px;

    div {
      min-width: 70px;
      max-width: calc(25% - 8px); /* 4 items por linha */

      &:hover {
        transform: translateY(-2px);
      }
    }

    img {
      width: 70px;
      height: 90px;
      border-radius: 8px;
    }

    p {
      font-size: 0.7rem;
      max-width: 70px;
      margin-top: 4px;
      line-height: 1.2;
    }

    /* Scrollbar mais fina no mobile */
    &::-webkit-scrollbar {
      height: 4px;
    }
  }

  @media (max-width: 360px) {
    gap: 8px;

    div {
      min-width: 70px;
    }

    img {
      width: 75px;
      height: 100px;
    }

    p {
      font-size: 0.7rem;
      max-width: 70px;
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  color: #ff6b6b;
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '🎭';
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
    font-size: 1.2rem;
    gap: 8px;

    &::before {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 1.1rem;
    gap: 6px;

    &::before {
      font-size: 1rem;
    }
  }
`;
