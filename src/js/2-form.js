document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('input[name="email"]');
  const messageInput = feedbackForm.querySelector('textarea[name="message"]');
  
  const saveFormDataToLocalStorage = () => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };
  
  const loadFormDataFromLocalStorage = () => {
    const savedFormData = localStorage.getItem('feedback-form-state');
    if (savedFormData) {
      const { email, message } = JSON.parse(savedFormData);
      emailInput.value = email;
      messageInput.value = message;
    }
  };
  
  loadFormDataFromLocalStorage();
  
  feedbackForm.addEventListener('input', () => {
    saveFormDataToLocalStorage();
  });
  
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    
    if (emailValue && messageValue) {
      console.log({
        email: emailValue,
        message: messageValue
      });
      
      emailInput.value = '';
      messageInput.value = '';
      localStorage.removeItem('feedback-form-state');
    } else {
      alert('Please fill in both email and message fields.');
    }
  });
});