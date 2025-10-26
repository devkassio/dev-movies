import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;

  span {
    border: 1px solid #fff;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    white-space: nowrap;
    font-weight: 500;

    &:hover {
      background: rgba(255, 107, 107, 0.2);
      border-color: #ff6b6b;
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 16px;
    justify-content: center;

    span {
      padding: 6px 12px;
      font-size: 0.8rem;
      border-radius: 16px;
    }
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 12px;

    span {
      padding: 5px 10px;
      font-size: 0.75rem;
      border-radius: 12px;
      max-width: calc(50% - 3px);
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (max-width: 360px) {
    gap: 4px;

    span {
      padding: 4px 8px;
      font-size: 0.7rem;
      border-radius: 10px;
      max-width: calc(50% - 2px);
    }
  }
`;
