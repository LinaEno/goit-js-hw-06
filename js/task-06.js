const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

const length = Number(input.dataset.length);

function onInputBlur(event) {
  if (input.value.length === length) {
    input.classList.remove('invalid');
    input.classList.add('valid');

    return;
  }

  input.classList.remove('valid');
  input.classList.add('invalid');
}



