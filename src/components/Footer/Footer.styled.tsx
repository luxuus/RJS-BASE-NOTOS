import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  padding-inline: 2rem;
  border-top: 1px solid #e0e0e0;

  background-color: #333;
  font-size: 14px;
  color: #f5f5f5;
`;

export const ContentWrapper = styled.div`
  ul {
    padding: 0;
  }

  h4 {
    color: #bababa;
  }
`;

export const FooterContact = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: white;

    &:focus,
    &:hover {
      color: yellow;
      text-decoration: underline;
    }
  }
`;

export const FooterSocial = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: white;

    &:focus,
    &:hover {
      color: yellow;
      text-decoration: underline;
    }
  }
`;

export const FooterLegal = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: white;

    &:focus,
    &:hover {
      color: yellow;
      text-decoration: underline;
    }
  }
`;
