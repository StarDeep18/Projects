const player = document.getElementById('player');
const gameContainer = document.getElementById('game-container');

let playerX = 0;
let playerY = 0;
const playerSpeed = 10;

const containerWidth = gameContainer.offsetWidth;
const containerHeight = gameContainer.offsetHeight;

document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp' && playerY > 0) {
		playerY -= playerSpeed;
	}
	if (event.key === 'ArrowDown' && playerY < containerHeight - 50) {
		playerY += playerSpeed;
	}
	if (event.key === 'ArrowLeft' && playerX > 0) {
		playerX -= playerSpeed;
	}
	if (event.key === 'ArrowRight' && playerX < containerWidth - 50) {
		playerX += playerSpeed;
	}

	player.style.top = `${playerY}px`;
	player.style.left = `${playerX}px`;
}); 