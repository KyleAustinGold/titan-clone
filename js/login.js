document.addEventListener('DOMContentLoaded', () => {
    const registerLink = document.getElementById('register-link');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
  
    registerLink.addEventListener('click', handleRegisterClick);
    forgotPasswordLink.addEventListener('click', handleForgotPasswordClick);
  
    function handleRegisterClick() {
      alert('Redirect to registration page or show registration form');
    }
  
    function handleForgotPasswordClick() {
      alert('Redirect to forgot password page or show forgot password form');
    }
  });
  