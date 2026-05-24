import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {ProposalPage} from './components/ProposalPage.tsx';

const isProposalRoute = window.location.pathname.startsWith('/propuesta');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isProposalRoute ? <ProposalPage /> : <App />}
  </StrictMode>,
);
