/* Global Imports */
import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
 
/* Application Level Imports */
 
/* Local Imports */
import {
  ErrorWrapper,
  InputGroupWrapper,
  InputWrapper,
  LabelWrapper,
} from "./Input.styled";
 
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
interface ErrorProps extends PropsWithChildren {}
interface InputGroupProps extends PropsWithChildren {}
interface InputGroupContextType {
  invalid: boolean;
  setInvalid: Dispatch<SetStateAction<InputGroupContextType["invalid"]>>;
}
 
const InputGroupContext = createContext<InputGroupContextType>({
  invalid: false,
  setInvalid: (value) => {},
});
 
const InputGroup: FC<InputGroupProps> & {
  Input: FC<InputProps>;
  Label: FC<LabelProps>;
} = ({ children }) => {
  const [invalid, setInvalid] = useState(false);
 
  return (
    <InputGroupContext.Provider value={{ invalid, setInvalid }}>
      <InputGroupWrapper>{children}</InputGroupWrapper>
    </InputGroupContext.Provider>
  );
};
 
const Label: FC<LabelProps> = ({ children, ...props }) => {
  return <LabelWrapper {...props}>{children}</LabelWrapper>;
};
 
/**
 * Le composant doit être appelé sous un InputGroup
 * checkValidity est une méthode standard d'HTML5
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
 */
const Input: FC<InputProps> = ({ ...props }) => {
  const ctx = useContext(InputGroupContext);
  if (!ctx) throw "Le composant doit être appelé sous un InputGroup";
  const { invalid, setInvalid } = ctx;
 
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <InputWrapper
      ref={inputRef}
      invalid={invalid}
      onBlur={() => setInvalid(!(inputRef.current?.checkValidity() ?? false))}
      onInvalid={() => setInvalid(true)}
      {...props}
    />
  );
};
 
const Error: FC<ErrorProps> = ({ children, ...props }) => {
  const { invalid } = useContext(InputGroupContext);
  return invalid && <ErrorWrapper {...props}>{children}</ErrorWrapper>;
};
 
InputGroup.Input = Input;
InputGroup.Label = Label;
 
const InputGroupMemo = React.memo(
  InputGroup
) as unknown as FC<InputGroupProps> & {
  Input: FC<InputProps>;
  Label: FC<LabelProps>;
  Error: FC<ErrorProps>;
};
 
InputGroupMemo.Label = React.memo(Label);
InputGroupMemo.Input = React.memo(Input);
InputGroupMemo.Error = React.memo(Error);
 
InputGroupMemo.displayName = "Input Memoized";
 
export default InputGroupMemo;