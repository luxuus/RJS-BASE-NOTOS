import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

import styled from "@emotion/styled";

interface CardProps extends PropsWithChildren {
  isOpen?: boolean;
}
interface CardTriggerProps extends PropsWithChildren {}
interface CardHeaderProps extends PropsWithChildren {}
interface CardContentProps extends PropsWithChildren {}
interface CardFooterProps extends PropsWithChildren {}

interface CardContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const CardContext = createContext<CardContextType>({
  open: true,
  setOpen: () => {},
});

const Card: FC<CardProps> & {
  Trigger: FC<CardTriggerProps>;
  Header: FC<CardHeaderProps>;
  Content: FC<CardContentProps>;
  Footer: FC<CardFooterProps>;
} = ({ children, isOpen = true }) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <CardContext.Provider value={{ open, setOpen }}>
      <CardWrapper>{children}</CardWrapper>
    </CardContext.Provider>
  );
};

const CardWrapper = styled.div`
  display: grid;
  padding-inline: 1rem;
  padding-block: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);

  background: var(--card);
  position: relative;
`;

const CardTrigger: FC<CardTriggerProps> = ({ children }) => {
  const { open, setOpen } = useContext(CardContext);

  return (
    <CardTriggerWrapper open={open} onClick={() => setOpen(!open)}>
      {children}
    </CardTriggerWrapper>
  );
};

const CardTriggerWrapper = styled.button<{ open: boolean }>`
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
`;

const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  const { open } = useContext(CardContext);
  return <CardHeaderWrapper open={open}>{children}</CardHeaderWrapper>;
};

const CardHeaderWrapper = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
`;

const CardContent: FC<CardContentProps> = ({ children }) => {
  const { open } = useContext(CardContext);
  return <CardContentWrapper open={open}>{children}</CardContentWrapper>;
};

const CardContentWrapper = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
`;

const CardFooter: FC<CardFooterProps> = ({ children }) => {
  const { open } = useContext(CardContext);
  return <CardFooterWrapper open={open}>{children}</CardFooterWrapper>;
};

const CardFooterWrapper = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  margin-block: 1rem;
`;

Card.Trigger = CardTrigger;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

const CardMemo = React.memo(Card) as unknown as FC<CardProps> & {
  Trigger: FC<CardTriggerProps>;
  Header: FC<CardHeaderProps>;
  Content: FC<CardContentProps>;
  Footer: FC<CardFooterProps>;
};
CardMemo.Trigger = React.memo(CardTrigger);
CardMemo.Header = React.memo(CardHeader);
CardMemo.Content = React.memo(CardContent);
CardMemo.Footer = React.memo(CardFooter);

CardMemo.displayName = "Card Memoized";

export default CardMemo;
