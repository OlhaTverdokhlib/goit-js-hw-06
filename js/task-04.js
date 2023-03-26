const decrButton = document.querySelector('button[data-action="decrement"]');

const incrButton = document.querySelector('button[data-action="increment"]');

const result = document.querySelector('#value');

let counterValue = 0;

const decreaseRes = () => {
  counterValue -= 1;
  result.innerHTML = counterValue;
};

const increaseRes = () => {
  counterValue += 1;
  result.innerHTML = counterValue;
};
decrButton.addEventListener('click', decreaseRes);

incrButton.addEventListener('click', increaseRes);
