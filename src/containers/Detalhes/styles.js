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
  background-image: url(${(props) => props.image});
  height: 50vh;
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-image: linear-gradient(to top, #000000, transparent);
    z-index: 2;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
`;

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  z-index: 3;

  img {
    border-radius: 30px;
    width: 270px;
    height: 100%;
    margin-left: 10px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.7s ease-in-out;
  }
`;

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  z-index: 3;

  h1 {
    margin-bottom: 20px;
    font-size: 45px;
    color: #fff;
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #fff;
  }
`;

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  width: 100%;
  margin: 40px 0 80px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1500px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  h3 {
    margin-bottom: 30px;
    font-size: 30px;
    color: #fff;
  }

  iframe {
    border-radius: 30px;
    width: 1000px;
    height: 500px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  }
`;
