import styled from "@emotion/styled";
 
export const InputWrapper = styled.input<{ invalid: boolean }>`

  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;

  padding: 0.5rem;
  border: 1px solid ${(props) => (props.invalid ? "red" : "initial")};
`;
 
export const LabelWrapper = styled.label`

  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;

  margin-block-end: 0.5rem;
`;
export const InputGroupWrapper = styled.div`

  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;

  display: flex;
  flex-direction: column;
  margin-block-end: 1rem;
`;
 
export const ErrorWrapper = styled.small`

  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;

  margin-block-start: 0.25rem;
  color: red;
`;