
const listEl = document.querySelector('#categories');

console.log('Number of categories: ', listEl.children.length);

const itemEl = document.querySelectorAll('.item');

itemEl.forEach(function (item) {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});