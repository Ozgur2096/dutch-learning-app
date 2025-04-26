import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppHeader } from './components/AppHeader';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHeader />
    <App />
  </StrictMode>
);
