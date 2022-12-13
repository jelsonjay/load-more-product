'use strict';
let main = document.querySelector('.main-modal');
let btn = document.querySelector('.btn');
let X = document.querySelector('.X');
let myMain = document.querySelector('main');
let loadBtn = document.querySelector('.load-more');

let currentProduct = 3;

loadBtn.onclick = () => {
	let cards = [...document.querySelectorAll('section .card-container .card')];

	for (let i = currentProduct; i < currentProduct + 3; i++) {
		cards[i].style.display = 'inline-block';
	}
	currentProduct += 3;

	if (currentProduct >= cards.length) {
		loadBtn.style.display = 'none';
	}
};

btn.addEventListener('click', show);

// display modal
function show() {
	main.style.display = 'block';
	myMain.style.filter = 'blur(10px)';
}
X.addEventListener('click', hiddenX);
function hiddenX() {
	main.style.display = 'none';
	myMain.style.filter = 'blur(0px)';
}

// hidden modal
main.addEventListener('click', hiddenMain);
function hiddenMain(e) {
	if (e.target.className == 'main-modal') {
		main.style.display = 'none';
		myMain.style.filter = 'blur(0px)';
	}
}
