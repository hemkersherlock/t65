// Form submission handler for Formspree integration
export const handleFormSubmission = async (form: HTMLFormElement): Promise<{ success: boolean; message: string }> => {
  try {
    const formData = new FormData(form);
    
    const response = await fetch('https://formspree.io/f/mvgbrayb', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you! Your submission has been received successfully.'
      };
    } else {
      const data = await response.json();
      return {
        success: false,
        message: data.error || 'There was a problem submitting your form. Please try again.'
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
};

// Show notification message
export const showNotification = (message: string, isSuccess: boolean) => {
  // Remove any existing notifications
  const existingNotification = document.querySelector('.form-notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `form-notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-sm ${
    isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
  }`;
  notification.textContent = message;

  // Add to page
  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
};