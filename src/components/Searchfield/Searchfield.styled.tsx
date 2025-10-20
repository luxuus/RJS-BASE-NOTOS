import styled from '@emotion/styled';

export const SearchfieldWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-auto-rows: auto;
  gap: 8px 10px;
  align-items: center;
  max-width: 520px;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
`;

export const SearchIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #64748b; /* slate-500 */
  grid-column: 1 / 2;
`;

export const InputEl = styled.input`
  grid-column: 2 / 3;
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

export const ChipsRow = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f1f5f9; /* slate-100 */
  color: #0f172a;       /* slate-900 */
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 13px;
  line-height: 1;
`;

export const RemoveBtn = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0 2px;
  font-size: 14px;
  line-height: 1;
  color: #475569; /* slate-600 */
`;

export const LastSearchRow = styled.div`
  grid-column: 1 / 3;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #64748b; /* slate-500 */
  font-size: 13px;
`;

export const LastSearchTag = styled.button`
  border: 1px dashed #cbd5e1; /* slate-300 */
  background: #fff;
  color: #0f172a;
  border-radius: 999px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #f8fafc; /* slate-50 */
  }
`;
