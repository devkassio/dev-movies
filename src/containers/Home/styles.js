import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(0);
  }
to {
    transform: scale(1);
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100dvh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-image: linear-gradient(to top, #000000, rgb(0, 0, 0, 0));
  }

  @media (max-width: 900px) {
    height: 100vh;
    background-position: center top;

    &::before {
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  @media (max-width: 480px) {
    min-height: 100vh;
    padding-top: 80px;

    &::before {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 1500px;
  max-width: 100%;
  padding: 0 20px;
  gap: 40px;

  @media (max-width: 1200px) {
    width: 100%;
    gap: 30px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 30px;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 20px;
  }
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  flex: 1;

  h1 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 42px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
    text-align: center;

    h1 {
      font-size: 36px;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
      margin-top: 20px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
      line-height: 1.2;
    }
    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;

export const Section = styled.section`
  scroll-margin-top: 100px; /* Ajusta o scroll para compensar o header fixo */

  &:first-child {
    scroll-margin-top: 0;
  }
`;

export const Poster = styled.div`
  z-index: 2;
  flex-shrink: 0;

  img {
    border-radius: 30px;
    width: 300px;
    height: auto;
    animation: ${scale} 0.8s ease-in-out;
    max-width: 100%;
    display: block;
  }

  @media (max-width: 1200px) {
    img {
      width: 250px;
    }
  }

  @media (max-width: 900px) {
    order: -1;

    img {
      width: 200px;
      border-radius: 20px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 160px;
      border-radius: 16px;
    }
  }
`;
