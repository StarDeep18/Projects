const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('click-button');

let score = 0;

clickButton.addEventListener('click', () => {
    score++;
    scoreElement.textContent = `Score: ${score}`;
});
