import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const CloseModal = styled.button`
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: #c3c3c377;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  z-index: 999999;

  &:hover {
    background: #ff0000ff;
  }
`;
