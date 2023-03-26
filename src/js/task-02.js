const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingr = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = ingredient;
  ingr.append(listEl);
});
