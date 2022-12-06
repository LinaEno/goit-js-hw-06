function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
}

refs.btn.addEventListener('click', event => {
  let randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  refs.span.textContent = randomHexColor;
})
