import styled from "@emotion/styled";

export const LoaderWrapper = styled.div`
  display: flex;
  block-size: 1rem;
  border: 1px solid var(--border);

  progress {
    flex: 1;
  }
`;

export const SpinnerWrapper = styled.div`
  width: 48px;
  aspect-ratio: 1/1;
  border: 5px solid var(--primary);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
