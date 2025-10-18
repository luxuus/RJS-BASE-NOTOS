import styled from "@emotion/styled";

export const InputWrapper = styled.input`
  padding: 0.5rem;

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

export const ErrorWrapper = styled.div`
  font-size: 0.875rem;
  color: red;
`;
