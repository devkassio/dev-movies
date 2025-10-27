import styled from 'styled-components';

export const Container = styled.div`
  min-height: 15vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  /* Suporte para iPhones com notch */
  padding-top: calc(15px + env(safe-area-inset-top));
  padding-left: calc(20px + env(safe-area-inset-left));
  padding-right: calc(20px + env(safe-area-inset-right));
  box-sizing: border-box;

  background-color: ${(props) =>
    props.$changeBackground ? '#000000' : 'transparent'};
  transition: background-color 0.7s ease-in-out;

  img {
    width: 400px;
  }

  @media (max-width: 1024px) {
    min-height: 12vh;
    padding: 12px 15px;
    padding-top: calc(12px + env(safe-area-inset-top));
    padding-left: calc(15px + env(safe-area-inset-left));
    padding-right: calc(15px + env(safe-area-inset-right));

    img {
      width: 300px;
    }
  }

  @media (max-width: 768px) {
    min-height: 10vh;
    padding: 10px 15px;
    padding-top: calc(10px + env(safe-area-inset-top));
    padding-left: calc(15px + env(safe-area-inset-left));
    padding-right: calc(15px + env(safe-area-inset-right));
    flex-direction: column;
    gap: 10px;

    img {
      width: 250px;
    }
  }

  @media (max-width: 480px) {
    min-height: 8vh;
    padding: 8px 10px;
    padding-top: calc(8px + env(safe-area-inset-top));
    padding-left: calc(10px + env(safe-area-inset-left));
    padding-right: calc(10px + env(safe-area-inset-right));

    img {
      width: 200px;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 50px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 25px;
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Li = styled.li`
  list-style: none;
  margin-right: 10px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    display: block;
    margin-top: 3px;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    height: 2px;
    background: linear-gradient(to right, #5036ac, #189b20);
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin-right: 5px;

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;

    a {
      font-size: 0.95rem;
      padding: 8px 12px;
      border-radius: 20px;
      background: ${(props) =>
        props.$isActive
          ? 'rgba(80, 54, 172, 0.3)'
          : 'rgba(255, 255, 255, 0.1)'};
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    &:hover a {
      background: rgba(255, 255, 255, 0.2);
    }

    /* Desativar o ::after em mobile já que usamos background no link */
    &::after {
      display: none;
    }

    &:hover::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.9rem;
      padding: 6px 10px;
    }
  }
`;

export const SectionLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;
