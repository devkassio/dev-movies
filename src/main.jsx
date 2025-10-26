import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routers from '../src/routes/routes';
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/dev-movies">
      <Routers />
    </BrowserRouter>
    <GlobalStyles />
  </StrictMode>,
);
