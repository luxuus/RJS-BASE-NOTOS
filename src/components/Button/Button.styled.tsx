import { UI } from "@/core/tokens";
import { UILevel, UISize } from "@/core/types/ui.types";
import styled from "@emotion/styled";

export const ButtonWrapper = styled.button<
  UISize & { disabled?: boolean } & UILevel
>`
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Helvetica, Arial;

  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) => {
    switch (props.size) {
      case "small":
        return `
                    padding: 4px 8px;
                    font-size: 12px;
                `;
      case "medium":
        return `
                    padding: 8px 16px;
                    font-size: 16px;
                `;
      case "large":
        return `
                    padding: 12px 24px;
                    font-size: 20px;
                `;
      default:
        return null;
    }
  }}

  ${(props) => {
    switch (props.level) {
      case "primary":
        return `
                    background-color: ${UI.colors.yellow};
                    color: ${UI.colors.black};
                    border: none;

                    &:hover:enabled {
                        background-color: ${UI.colors.darkYellow};
                    }
                `;
      case "optional":
        return `
                    background-color: transparent;
                    color: ${UI.colors.black};
                    border: 2px solid ${UI.colors.black};

                    &:hover:enabled {
                        background-color: ${UI.colors.lightGray};
                    }
                `;
      case "critical":
        return `
                    background-color: ${UI.colors.black};
                    color: ${UI.colors.yellow};
                    border: none;

                    &:hover:enabled {
                        background-color: ${UI.colors.darkGray};
                    }
                `;
      default:
        return null;
    }
  }}
`;
