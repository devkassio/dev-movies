import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  animation: fadeIn 0.3s ease-out forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 20px;
  padding: 30px;
  max-width: 90vw;
  max-height: 92vh;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: scale(0.8);
  animation: scaleIn 0.3s ease-out forwards;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;
    max-width: 95vw;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 12px;
    max-width: 98vw;
    max-height: 98vh;
  }

  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`;

export const CloseModal = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  z-index: 999999;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.2);
    border-color: #ff4444;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
    top: 15px;
    right: 15px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
    top: 10px;
    right: 10px;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // 16:9 aspect ratio
  border-radius: 15px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 15px;
  }
`;

export const VideoControls = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
`;

export const FullscreenButton = styled.button`
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: white;

  .spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid #ff6b6b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #ff6b6b;
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
    line-height: 1.5;
  }
`;

export const VideoInfo = styled.div`
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const VideoTitle = styled.h3`
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.3;
`;

export const VideoDescription = styled.p`
  color: #b3b3b3;
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 15px;
`;

export const QualityButton = styled.button`
  background: ${(props) =>
    props.active
      ? 'linear-gradient(45deg, #ff6b6b, #ee5a52)'
      : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: 1px solid
    ${(props) => (props.active ? '#ff6b6b' : 'rgba(255, 255, 255, 0.2)')};
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: linear-gradient(45deg, #ff6b6b, #ee5a52);
    border-color: #ff6b6b;
    transform: translateY(-1px);
  }
`;
