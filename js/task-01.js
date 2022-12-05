const listEl = document.querySelector('#categories');

console.log('Number of categories: ', listEl.children.length);

const itemEl = document.querySelectorAll('.item');

const titleEl1 = itemEl[0].querySelector('h2');
console.log('Category: ', titleEl1.textContent);

const listEl1 = itemEl[0].querySelectorAll('li');
console.log('Elements: ', listEl1.length);

const titleEl2 = itemEl[1].querySelector('h2');
console.log('Category: ', titleEl2.textContent);

const listEl2 = itemEl[1].querySelectorAll('li');
console.log('Elements: ', listEl2.length);

const titleEl3 = itemEl[2].querySelector('h2');
console.log('Category: ', titleEl3.textContent);

const listEl3 = itemEl[2].querySelectorAll('li');
console.log('Elements: ', listEl3.length);
