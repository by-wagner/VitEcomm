import styled from "styled-components";

export const FeatureContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FeatureButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 24px;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }
`;
