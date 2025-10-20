import styled from '@emotion/styled';

export const AutoCompleteWrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 240px;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
`;

export const InputEl = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  border: 1px solid #e2e8f0; /* slate-200 */
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  line-height: 20px;

  &:focus {
    border-color: #94a3b8; /* slate-400 */
    box-shadow: 0 0 0 3px rgba(148,163,184,.25);
  }
`;

export const ListBox = styled.ul`
  list-style: none;
  margin: 6px 0 0 0;
  padding: 4px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 20;

  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.06);
  max-height: 240px;
  overflow: auto;
`;

export const OptionEl = styled.li`
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &[data-active="1"] {
    background: #f1f5f9; /* slate-100 */
  }

  &:hover {
    background: #f1f5f9;
  }
`;

export const NoResult = styled.li`
  padding: 10px;
  color: #64748b; /* slate-500 */
  font-size: 13px;
`;
