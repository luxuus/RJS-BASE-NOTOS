import styled from "@emotion/styled";

export const AutocompleteWrapper = styled.div``;

export const AutocompleteLabelWrapper = styled.label`
  margin-block-end: 0.5rem;
`;

export const AutocompleteInputWrapper = styled.input`
  padding: 0.5rem;
`;

export const AutocompleteDropdownWrapper = styled.div<{ open: boolean }>`
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
