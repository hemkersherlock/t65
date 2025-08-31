// Form submission handler with success/error notifications
export function setupFormHandlers() {
  // Create notification container if it doesn't exist
  let notificationContainer = document.getElementById('notification-container');
  if (!notificationContainer) {
    notificationContainer = document.createElement('div');
    notificationContainer.id = 'notification-container';
    notificationContainer.className = 'fixed top-4 right-4 z-50 space-y-2';
    document.body.appendChild(notificationContainer);
  }

  // Function to show notifications
  function showNotification(message: string, type: 'success' | 'error') {
    const notification = document.createElement('div');
    notification.className = `
      px-6 py-4 rounded-lg shadow-lg text-white font-medium
      transform transition-all duration-300 translate-x-full opacity-0
      ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}
    `;
    notification.textContent = message;
    
    notificationContainer!.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full', 'opacity-0');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  // Handle all forms
  document.addEventListener('submit', async (e) => {
    const form = e.target as HTMLFormElement;
    
    // Only handle forms with Formspree action
    if (!form.action.includes('formspree.io')) return;
    
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        showNotification('Message sent successfully!', 'success');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      // Restore button state
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}