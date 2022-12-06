
const listEl = document.querySelector('#categories');

const numberOfCategoriesEl = listEl.children.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

const itemEl = document.querySelectorAll('.item');

itemEl.forEach(function (item) {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});