const gameContainer = document.getElementById('game-container');
const ball = document.getElementById('ball');
const paddle = document.getElementById('paddle');
const scoreDisplay = document.getElementById('score');

let ballX = 290;
let ballY = 190;
let ballSpeedX = 3;
let ballSpeedY = 3;

let paddleX = 100;
let paddleWidth = 100;  // Изначальная ширина полоски
let score = 0;


function updateBallPosition() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  
  // Столкновение со стеною
  if (ballX < 0 || ballX > gameContainer.clientWidth - ball.clientWidth) 
  {
    ballSpeedX = -ballSpeedX;
  } 

  if (ballY < 0) 
  {
    ballSpeedY = -ballSpeedY;
  }

  // Проверьте, пропущен ли мяч
  if (ballY > gameContainer.clientHeight - ball.clientHeight) 
  {
    alert("Game over! Shall we continue the game? :)");
    document.location.reload();
    clearInterval(interval); 
  }

  // Столкновение с доскою
  if 
  (
    ballY + ball.clientHeight > paddle.offsetTop &&
    ballX + ball.clientWidth > paddleX &&
    ballX < paddleX + paddle.clientWidth
  ) {
    ballSpeedY = -ballSpeedY;
    score++;
    scoreDisplay.textContent = score;

    // Уменьшаем ширину полоски при ударе мячика
    paddleWidth = Math.max(paddleWidth - 7, 7);
    paddle.style.width = paddleWidth + "px";

  }

  // Победа на 10 
  if (score == 10)
{
  alert("You've won! Hurray!");
  document.location.reload();
  clearInterval(interval); 
}

  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  requestAnimationFrame(updateBallPosition);
}


document.addEventListener('mousemove', (event) => {
  paddleX = event.clientX - gameContainer.offsetLeft - paddle.clientWidth / 2;
  if (paddleX < 0) {
    paddleX = 0;
  }
  if (paddleX > gameContainer.clientWidth - paddle.clientWidth) {
    paddleX = gameContainer.clientWidth - paddle.clientWidth;
  }
  paddle.style.left = paddleX + 'px';
});

updateBallPosition();
