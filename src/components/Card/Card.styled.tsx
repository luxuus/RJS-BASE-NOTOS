import styled from "@emotion/styled";

export const CardTriggerWrapper = styled.button<{ open: boolean }>`
  position: absolute;
  inset-block-start: 0.5rem;
  inset-inline-end: 0.5rem;
  border: 0;
  background-color: transparent;
`;

export const CardWrapper = styled.div`
  display: grid;
  padding-inline: 1rem;
  padding-block: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);

  background: var(--card);
  position: relative;
`;

export const CardFooterWrapper = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  margin-block: 1rem;
`;

export const CardContentWrapper = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const CardHeaderWrapper = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
`;
