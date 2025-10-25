import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  height: auto;
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  cursor: default;
  
  iframe {
    width: 100%;
    height: 450px;
    border: none;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 95%;
    
    iframe {
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    width: 98%;
    
    iframe {
      height: 200px;
    }
  }

  div {
    padding: 20px;
    text-align: center;
    font-size: 16px;
    color: white;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  z-index: 10000;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.8);
  }

  &:focus {
    outline: 2px solid #fff;
  }
`;
