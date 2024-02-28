//Menu Toggle for all sites
const toggleMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.style.display = element.style.display === "none" ? "block" : "none";
    }
  };
  
  // Theme Toggle Switch for all sites
  const themeToggleSwitch = document.getElementById("theme-toggle-switch");
  if (themeToggleSwitch) {
    themeToggleSwitch.addEventListener("change", function(event) {
      document.body.classList.toggle("dark-mode", event.target.checked);
      document.body.classList.toggle("light-mode", !event.target.checked);
    });
  }
  
  // Dropdown for the FAQ in home.html
  function toggleDropdown(button, content, chevron) {
    const isExpanded = content.style.display === 'block';
    content.style.display = isExpanded ? 'none' : 'block';
    chevron.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    chevron.classList.toggle('active', !isExpanded); 
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggleButton');
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        const content = card.querySelector('.dropdown-content');
        const chevron = card.querySelector('.fa-chevron-down');
        toggleDropdown(button, content, chevron); 
      });
    });
  
    // Form validation and submission for contact.html
    const onlineConsultationForm = document.querySelector('.online-consultation form');
    if (onlineConsultationForm) {
      onlineConsultationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        if (validateForm()) { // Validate form before sending
          sendDataToAPI();
        }
      });
    }
  
    //validation for home.html FAQ form
    const mainNewsletterForm = document.getElementById('newsletter-form');
  if (mainNewsletterForm) {
    setupNewsletterFormValidation(mainNewsletterForm);
  }

  // Setup validation for the footer newsletter form
  const footerNewsletterForm = document.getElementById('footer-newsletter-form');
  if (footerNewsletterForm) {
    setupNewsletterFormValidation(footerNewsletterForm);
  }
});

function setupNewsletterFormValidation(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = form.querySelector('input[type=email]');
    const existingError = form.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    if (!emailInput.value || !validateEmail(emailInput.value)) {
      const errorMessage = document.createElement('span');
      errorMessage.textContent = 'Please enter a valid email address.';
      errorMessage.classList.add('error-message');
      errorMessage.style.color = 'red';
      emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);
    } else {
      console.log('Form is valid, proceed with submission');
      // Implement your form submission logic here
    }
  });
}

// Utility function to validate email using regex
function validateEmail(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

// Function to display error messages next to form elements
function displayError(elementId, message) {
  const element = document.getElementById(elementId);
  if (element) {
    const errorMessage = document.createElement('span');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    errorMessage.style.color = 'red';
    element.parentNode.insertBefore(errorMessage, element.nextSibling);
  }
}

  function sendDataToAPI() {
    const formData = {
      full_name: document.getElementById('full-name').value,
      email_address: document.getElementById('email-address').value,
      specialist: document.getElementById('specialist').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value
    };

    fetch('https://kyhnet23-assignment.azurewebsites.net/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Appointment made successfully.');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while making the appointment.');
    });
  }


  //Form validation for contact.html
function validateForm() {
    let isValid = true; // Assume form is valid initially
    const fullName = document.getElementById('full-name').value;
    const emailAddress = document.getElementById('email-address').value;
    const specialist = document.getElementById('specialist').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Reset any previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Check if fullName is filled out
    if (!fullName.trim()) {
        displayError('full-name', 'Full name is required.');
        isValid = false;
    }

    // Custom email validation
    if (!emailAddress.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        displayError('email-address', 'Please enter a valid email address.');
        isValid = false;
    }

    // Check if specialist is selected
    if (!specialist) {
        displayError('specialist', 'Please select a specialist.');
        isValid = false;
    }

    if (!date) {
      displayError('date', 'Please select a date. ');
      isValid = false;
    }

    if (!time) {
      displayError('time', 'Please select a time. ');
      isValid = false;
    }
    return isValid; 
}
  