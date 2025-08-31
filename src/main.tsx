import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { handleFormSubmission, showNotification } from './utils/formHandler'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Add form submission handlers after the app loads
document.addEventListener('DOMContentLoaded', () => {
  // Handle all forms on the page
  const forms = document.querySelectorAll('form[action*="formspree.io"]');
  
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      try {
        const result = await handleFormSubmission(form as HTMLFormElement);
        showNotification(result.message, result.success);
        
        if (result.success) {
          (form as HTMLFormElement).reset();
        }
      } catch (error) {
        showNotification('An unexpected error occurred. Please try again.', false);
      } finally {
        // Restore button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  });
});