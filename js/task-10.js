function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input: document.querySelector('#controls>input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

const createBoxes = amount => {
	const boxesToCreate = []
	for (let i = 0; i < amount; i+=1) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		boxesToCreate.push(div)
	}
	return boxesToCreate
}

refs.createBtn.addEventListener('click', () => {
	const boxCreate = createBoxes(refs.input.value)
	refs.boxes.append(...boxCreate)
})


refs.destroyBtn.addEventListener('click', () => {
  refs.boxes.remove()
  refs.input.value = ''
})