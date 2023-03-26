const inputData = document.querySelector('#validation-input');
const correctLength = inputData.dataset.length;

inputData.addEventListener('blur', evt => {
  if (evt.target.value.length === Number(correctLength)) {
    if (inputData.classList.contains('invalid')) {
      inputData.classList.remove('invalid');
      inputData.classList.add('valid');
    }
  } else {
    inputData.classList.add('invalid');
  }
});
