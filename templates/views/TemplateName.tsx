/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './TemplateName.style.css';


interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => {

   Hooks.useDocumentTitle('TemplateName View');

   return (
   <div className="TemplateName" data-testid="TemplateName">
      <UI.Main>TemplateName Content</UI.Main>
   </div>
   )
};

export default TemplateName;
