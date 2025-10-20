import styled from "@emotion/styled";
 
export const SkeletonWrapper = styled.div``;
 
export const SkeletonHelperWrapper = styled.div<{
  width: number;
  height: number;
}>`
  background-color: gray;
  display: flex;
  margin-block-end: 1rem;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
 
  animation: var(--animate-pulse);
 
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
`;
 