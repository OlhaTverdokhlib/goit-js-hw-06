const nameInput = document.querySelector('#name-input');
nameInput.addEventListener('input', onInput);

const nameOutput = document.querySelector('#name-output');

function onInput(evt) {
  if (nameInput.value.length > 0) {
    nameOutput.innerHTML = evt.currentTarget.value;
  } else {
    nameOutput.innerHTML = 'Anonymous';
  }
}
