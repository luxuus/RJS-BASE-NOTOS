import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const LoaderWrapper = styled.div<{
  inline?: boolean;
}>`
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Helvetica, Arial;

  display: ${(p) => (p.inline ? "inline-flex" : "flex")};
  align-items: center;
  gap: 0.5rem;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.span<
  {
    size: number;
    thickness: number;
  } & any
>`
  display: inline-block;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
  border: ${(p) => Math.max(1, p.thickness)}px solid currentColor;
  border-top-color: transparent;
  animation: ${spin} 0.8s linear infinite;
`;

export const BarTrack = styled.div<
  {
    width: number;
    height: number;
    rounded: boolean;
  } & any
>`
  position: relative;
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  background: rgba(0, 0, 0, 0.12);
  border-radius: ${(p) => (p.rounded ? p.height / 2 : 4)}px;
  overflow: hidden;
`;

export const BarThumb = styled.div<{
  value?: number;
  indeterminate?: boolean;
}>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${(p) =>
    p.indeterminate ? "40%" : `${Math.min(100, Math.max(0, p.value ?? 0))}%`};
  background: currentColor;
  transform: translateX(${(p) => (p.indeterminate ? "-100%" : "0")});
  border-radius: inherit;

  ${(p) =>
    p.indeterminate
      ? `
    animation: loader-bar-indeterminate 1.2s ease-in-out infinite;
    @keyframes loader-bar-indeterminate {
      0%   { transform: translateX(-100%); }
      50%  { transform: translateX(40%);   }
      100% { transform: translateX(100%);  }
    }
  `
      : ""}
`;

export const Label = styled.span`
  font-size: 0.875rem;
  opacity: 0.85;
`;
