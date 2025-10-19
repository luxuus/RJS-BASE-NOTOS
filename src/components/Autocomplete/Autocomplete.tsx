import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "@emotion/styled";

interface AutocompleteGroupProps extends PropsWithChildren {
  initialOptions: Array<string>;
}

interface AutocompleteInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface AutocompleteLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}
interface AutocompleteContextType {
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
  options: Array<string>;
  setOptions: Dispatch<SetStateAction<Array<string>>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AutocompleteContext = createContext<AutocompleteContextType>({
  option: "",
  setOption: () => {},
  options: [],
  setOptions: () => {},
  open: false,
  setOpen: () => {},
});

const AutocompleteGroup: FC<AutocompleteGroupProps> & {
  Label: FC<AutocompleteLabelProps>;
  Input: FC<AutocompleteInputProps>;
} = ({ initialOptions, children }) => {
  const [option, setOption] = useState("");
  const [options, setOptions] = useState(initialOptions);
  const [open, setOpen] = useState(false);

  return (
    <AutocompleteContext.Provider
      value={{ option, setOption, options, setOptions, open, setOpen }}
    >
      <AutocompleteGroupWrapper>{children}</AutocompleteGroupWrapper>
    </AutocompleteContext.Provider>
  );
};

const AutocompleteGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 1rem;
`;

const Label: FC<AutocompleteLabelProps> = ({ children, ...props }) => {
  return (
    <AutocompleteLabelWrapper {...props}>{children}</AutocompleteLabelWrapper>
  );
};
const AutocompleteLabelWrapper = styled.label`
  margin-block-end: 0.5rem;
`;

const Input: FC<AutocompleteInputProps> = ({ ...props }) => {
  const { option, setOption, options, open, setOpen } =
    useContext(AutocompleteContext);
  const [optionIndex, setOptionIndex] = useState(-1);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOptionIndex(-1);
    optionRefs.current = optionRefs.current.slice(0, filteredOptions.length);
  }, [filteredOptions]);

  useEffect(() => {
    if (optionIndex >= 0 && optionIndex < optionRefs.current.length) {
      const element = optionRefs.current[optionIndex];
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [optionIndex]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || filteredOptions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setOptionIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setOptionIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (optionIndex >= 0 && optionIndex < filteredOptions.length) {
          setOption(filteredOptions[optionIndex]);
          setOpen(false);
          inputRef.current?.focus();
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        inputRef.current?.focus();
        break;
    }
  }

  function handleAutocomplete(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setOption(value);
    setFilteredOptions(
      options.filter((opt) => opt.toLowerCase().includes(value.toLowerCase()))
    );
    setOpen(!!value);
  }

  function handleOptionClick(opt: string) {
    setOption(opt);
    setOpen(false);
    inputRef.current?.focus();
  }

  return (
    <>
      <AutocompleteInputWrapper
        ref={inputRef}
        onInput={handleAutocomplete}
        onKeyDown={handleKeyDown}
        value={option}
        {...props}
      />
      <AutocompleteDropdownWrapper open={open} {...props}>
        <ul>
          {filteredOptions.map((opt, index) => (
            <li key={index}>
              <button
                className={optionIndex === index ? "active" : ""}
                type="button"
                ref={(el) => (optionRefs.current[index] = el)}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </AutocompleteDropdownWrapper>
    </>
  );
};

const AutocompleteInputWrapper = styled.input`
  padding: 0.5rem;
`;

const AutocompleteDropdownWrapper = styled.div<{ open: boolean }>`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: var(--background);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    display: ${(props) => (props.open ? "block" : "none")};

    button {
      display: block;
      width: 100%;
      border: 0;
      padding-inline: 0.5rem;
      padding-block: 0.5rem;
      text-align: start;
      background-color: var(--background);
      cursor: pointer;

      &:hover,
      &:focus,
      &.active {
        background-color: var(--accent);
      }
    }
  }
`;

// Attach subcomponents to the main component
AutocompleteGroup.Label = Label;
AutocompleteGroup.Input = Input;

// Memoize the main component and its subcomponents
const AutocompleteGroupMemo = React.memo(
  AutocompleteGroup
) as unknown as FC<AutocompleteGroupProps> & {
  Label: FC<AutocompleteLabelProps>;
  Input: FC<AutocompleteInputProps>;
};

AutocompleteGroupMemo.Label = React.memo(Label);
AutocompleteGroupMemo.Input = React.memo(Input);

AutocompleteGroupMemo.displayName = "AutocompleteGroupMemo";

export default AutocompleteGroupMemo;
