import styled from 'styled-components';

export const Container = styled.div`
  background: #000000;
  padding: 0 20px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  box-sizing: border-box;

  h2 {
    margin: 30px 0 20px 20px;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .swiper-wrapper {
    display: flex;
    padding-bottom: 10px;
    width: fit-content;
    max-width: none;
  }

  .swiper-slide {
    width: auto !important;
    flex-shrink: 0;
    max-width: none;
  }

  /* Previne vazamento horizontal específico para mobile */
  .swiper {
    width: 100%;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-bottom: 35px;

    h2 {
      margin: 25px 0 18px 16px;
      font-size: 22px;
      font-weight: 700;
    }
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    margin-bottom: 30px;

    h2 {
      margin: 20px 0 15px 12px;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.3px;
    }

    .swiper-wrapper {
      padding-bottom: 8px;
    }
  }

  @media (max-width: 360px) {
    padding: 0 10px;

    h2 {
      margin: 18px 0 12px 10px;
      font-size: 18px;
    }
  }
`;
