'use strict';

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
