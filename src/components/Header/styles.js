import styled from 'styled-components';

export const Container = styled.div`
  min-height: 15vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;

  background-color: ${(props) =>
    props.$changeBackground ? '#000000' : 'transparent'};
  transition: background-color 0.7s ease-in-out;

  img {
    width: 400px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 50px;
`;

export const Li = styled.li`
  list-style: none;
  margin-right: 10px;

  a {
    text-decoration: none;
    color: #fff;
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
