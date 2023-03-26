const listOfItems = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${listOfItems.length}`);

const categoriesWithElements = listOfItems.forEach(item => {
  const categories = item.querySelector('h2').textContent;
  const number = item.querySelectorAll('li');
  console.log(`Category: ${categories} \nElements: ${number.length}`);
});
