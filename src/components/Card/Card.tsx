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

import {
  CardTriggerWrapper,
  CardWrapper,
  CardFooterWrapper,
  CardContentWrapper,
  CardHeaderWrapper,
} from "./Card.styled";
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

const CardTrigger: FC<CardTriggerProps> = ({ children }) => {
  const { open, setOpen } = useContext(CardContext);

  return (
    <CardTriggerWrapper open={open} onClick={() => setOpen(!open)}>
      {children}
    </CardTriggerWrapper>
  );
};

const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  const { open } = useContext(CardContext);
  return <CardHeaderWrapper open={open}>{children}</CardHeaderWrapper>;
};

const CardContent: FC<CardContentProps> = ({ children }) => {
  const { open } = useContext(CardContext);
  return <CardContentWrapper open={open}>{children}</CardContentWrapper>;
};

const CardFooter: FC<CardFooterProps> = ({ children }) => {
  const { open } = useContext(CardContext);
  return <CardFooterWrapper open={open}>{children}</CardFooterWrapper>;
};

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
