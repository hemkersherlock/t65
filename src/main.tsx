import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { handleFormSubmission, showNotification, setupFormHandlers } from './utils/formHandler'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize form handlers after DOM is loaded
document.addEventListener('DOMContentLoaded', setupFormHandlers)