import React, { useMemo } from 'react';
import { faInstagram, faLinkedin, FontAwesomeIcon } from '@/bridges/fa'
import { FooterWrapper, Row, Block, Title, Links, Socials, Copy } from './Footer.styled';
 
type FooterProps = {
  companyName?: string;
  email?: string;
  phone?: string;
};
 
const Footer: React.FC<FooterProps> = ({ companyName = 'Votre Société', email, phone }) => {
  const year = useMemo(()=>new Date().getFullYear(), []);
 
  return (
    <FooterWrapper data-testid="Footer">
      <Row>
        <Block>
          <Title>Contact</Title>
          <Links>
            {email && <a href={`mailto:${email}`}>{email}</a>}
            {phone && <a href={`tel:${phone}`}>{phone}</a>}
          </Links>
        </Block>
 
        <Block>
          <Title>Légal</Title>
          <Links>
            <a href="/legal">Mentions légales</a>
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
          </Links>
        </Block>
 
        <Block>
          <Title>Suivez-nous</Title>
          <Socials>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/id-info/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Socials>
        </Block>
      </Row>
 
      <Copy>© {year} {companyName}. Tous droits réservés.</Copy>
    </FooterWrapper>
  );
};
/**
 * Si le composant ne change pas, exporté la version Mémoisé
 */
// const FooterMemo = React.memo(Footer);
 
export default Footer;