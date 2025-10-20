import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  --card-bg: #fff;
  --card-fg: #0f172a; /* slate-900 */
  --card-border: #e2e8f0; /* slate-200 */
  --card-muted: #64748b; /* slate-500 */
  --card-shadow: 0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1);
  
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;

  background: var(--card-bg);
  color: var(--card-fg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  overflow: hidden;

  &[data-open="false"] {
    /* optionnel : un léger style quand fermé */
    opacity: 0.98;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--card-border);
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const CardActions = styled.div`
  display: inline-flex;
  gap: 6px;

  & > .card-action {
    border: 1px solid var(--card-border);
    border-radius: 8px;
    background: #f8fafc; /* slate-50 */
    padding: 6px 10px;
    font-size: 0.875rem;
    cursor: pointer;
  }
  & > .card-action:disabled { opacity: .5; cursor: not-allowed; }
`;

export const CardToggle = styled.button`
  border: 1px solid var(--card-border);
  background: #f1f5f9; /* slate-100 */
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 0.875rem;
  cursor: pointer;
`;

export const CardBody = styled.section`
  padding: 14px;
  &[hidden] { display: none; }
`;

export const CardFooter = styled.footer`
  padding: 12px 14px;
  border-top: 1px solid var(--card-border);
  color: var(--card-muted);
  font-size: 0.9rem;
`;
