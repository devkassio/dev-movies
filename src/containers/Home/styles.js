import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100dvh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 1500px;
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

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
`;

export const Poster = styled.div`
  z-index: 2;
  img {
    border-radius: 30px;
    width: 300px;
  }
`;
