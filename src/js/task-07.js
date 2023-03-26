const sizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControl.addEventListener('input', countEl);

function countEl(evt) {
  // console.dir(evt.target.value);
  textEl.style.fontSize = evt.target.value + 'px';
}
