import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;

  img {
    width: 400px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 50px;

  li {
    list-style: none;
    margin-right: 10px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const Li = styled.li``;
