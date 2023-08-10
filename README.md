# Ping-Pong
## The rule of the game:
+ Score 10 points
+ Reflect the ball with a strip
+ When the ball collides, the strip decreases
  
![image](./images/ping.png)

## The main code is "Reducing the strip when hitting the ball"
```
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
```

[See demo](https://andreiextr.github.io/Ping-Pong/)
