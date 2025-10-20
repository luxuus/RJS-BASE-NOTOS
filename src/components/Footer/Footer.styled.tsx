import styled from '@emotion/styled';
 
export const FooterWrapper = styled.footer`

  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;

  background: #333;
  color: #f5f5f5;
  border-top: 1px solid #444;
  padding: 16px;
 
  display: flex;
  bottom: 0;
  flex-direction: column;
  gap: 12px;
 
  @media (min-width: 640px) {
    padding: 20px 24px;
  }
`;
 
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
 
  @media (min-width: 640px) {
    justify-content: space-between;
  }
`;
 
export const Block = styled.div`
  min-width: 220px;
  text-align: center;
 
  @media (min-width: 640px) {
    text-align: left;
  }
`;
 
export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
  opacity: 0.9;
`;
 
export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
 
  a {
    color: #f5f5f5;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.9;
  }
  a:hover {
    text-decoration: underline;
    opacity: 1;
  }
`;
 
export const Socials = styled.div`
  display: flex;
  gap: 10px;
 
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background: #444;
    text-decoration: none;
  }
  a:hover { background: #555; }
 
  svg { width: 18px; height: 18px; color: #f5f5f5; }
`;
 
export const Copy = styled.div`
  font-size: 12px;
  opacity: 0.7;
  text-align: center;
`;
 