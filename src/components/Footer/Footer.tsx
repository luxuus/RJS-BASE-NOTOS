import React, { FC, PropsWithChildren } from "react";

import {
  ContentWrapper,
  FooterContact,
  FooterLegal,
  FooterSocial,
  FooterWrapper,
} from "./Footer.styled";

interface FooterProps extends PropsWithChildren {}
interface ContactProps {
  text: string;
  iconUrl: string;
}
interface SocialProps {
  url: string;
  label?: string;
  iconUrl: string;
}
interface LegalProps {
  text: string;
  url: string;
}
interface ContentProps extends PropsWithChildren {
  label: string;
}

const Footer: FC<FooterProps> & {
  Contact: FC<ContactProps>;
  Social: FC<SocialProps>;
  Legal: FC<LegalProps>;
  Content: FC<ContentProps>;
} = ({ children }) => {
  return <FooterWrapper data-testid="Footer">{children}</FooterWrapper>;
};

const Content: FC<ContentProps> = ({ children, label }) => {
  return (
    <ContentWrapper>
      <h4>{label}</h4>
      <ul>{children}</ul>
    </ContentWrapper>
  );
};
const Contact: FC<ContactProps> = ({ text, iconUrl }) => {
  return (
    <FooterContact>
      <img src={iconUrl} height={20} alt="contact" />
      <span>{text}</span>
    </FooterContact>
  );
};

const Social: FC<SocialProps> = ({ label, url, iconUrl }) => {
  return (
    <FooterSocial>
      <img src={iconUrl} height={20} alt="social" />
      <a href={url}>{label}</a>
    </FooterSocial>
  );
};

const Legal: FC<LegalProps> = ({ text, url }) => {
  return (
    <FooterLegal>
      <a href={url}>{text}</a>
    </FooterLegal>
  );
};

Footer.Contact = Contact;
Footer.Legal = Legal;
Footer.Social = Social;
Footer.Content = Content;

const FooterMemo = React.memo(Footer) as unknown as FC<FooterProps> & {
  Contact: FC<ContactProps>;
  Social: FC<SocialProps>;
  Legal: FC<LegalProps>;
  Content: FC<ContentProps>;
};

FooterMemo.Contact = React.memo(Contact);
FooterMemo.Social = React.memo(Social);
FooterMemo.Legal = React.memo(Legal);
FooterMemo.Content = React.memo(Content);

FooterMemo.displayName = "Footer";

export default FooterMemo;
