import styled from "@emotion/styled";

export const InputWrapper = styled.input<{ invalid: boolean }>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.invalid ? "red" : "transparent")};
  /* &:invalid {
    outline: 2px solid red;
  }

  &:focus:invalid {
    outline: 5px solid red;
  } */
`;

export const LabelWrapper = styled.label`
  margin-block-end: 0.5rem;
`;
export const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 1rem;
`;

export const ErrorWrapper = styled.small`
  margin-block-start: 0.25rem;
  color: red;
`;
