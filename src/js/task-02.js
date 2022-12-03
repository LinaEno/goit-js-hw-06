const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeIngredients = ingredients => {
  return ingredients.map(element => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = element;
    return itemEl;
  })
};

const elements = makeIngredients(ingredients);



listEl.append(...elements);

console.log(elements);
