function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

function createBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    box.append(div);
    let size = 30 + 10 * i;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
  }
}

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  box.innerHTML = '';
}
