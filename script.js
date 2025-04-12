const screen = document.querySelector('.screen');
const ship = document.querySelector('.spaceship');
const startBtn = document.getElementById('start');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');

let score = 0;
let shipPosition = 50;
const tags = ['<div>','<br>','<h1>','<a>','</div>','<p1>','<class>'];

document.addEventListener('keydown', function(e) {
	if (e.key === 'ArrowLeft' && shipPosition > 5) {
		shipPosition -=5
	}
	if (e.key === 'ArrowRight' && shipPosition < 95) {
		shipPosition +=5
	}
	ship.style.left = shipPosition + '%';
});
	