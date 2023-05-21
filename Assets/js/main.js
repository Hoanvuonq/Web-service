const passwordInputs = document.querySelectorAll('input[type="password"]');
const passwordToggles = document.querySelectorAll('.password-toggle');

passwordToggles.forEach(function(toggle, index) {
  toggle.addEventListener('click', function() {
    if (passwordInputs[index].type === 'password') {
      passwordInputs[index].type = 'text';
      toggle.innerHTML = '<i class="fas fa-eye"></i>'; 
    } else { 
      passwordInputs[index].type = 'password';
      toggle.innerHTML = '<i class="fas fa-eye-slash"></i>'; 
    }
  });
});

passwordInputs.forEach(function(input, index) {
  input.addEventListener('input', function(event) {
    if (input.value.trim() === '') {
      passwordToggles[index].classList.remove('show');
    } else {
      passwordToggles[index].classList.add('show');
    }
  });
});


const form = document.querySelector('.form-login');
const inputs = form.querySelectorAll('.input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
      isValid = false;
      input.parentElement.classList.add('alert-validate');
    } else {
      input.parentElement.classList.remove('alert-validate');
    }
  });
});

inputs.forEach(function(input) {
  input.addEventListener('input', function(event) {
    if (input.value.trim() === '') {
      input.parentElement.classList.add('alert-validate');
    } else {
      input.parentElement.classList.remove('alert-validate');
    }
  });
});




