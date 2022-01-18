const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

const matrix = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0],
];

function collide() {
  // Will take a game and player
}

function createMatrix(w, h) {
  const matrix = [];
  while (h--) {
    matrix.push(new Array(w).fill(0));
  }
  return matrix;
}

function draw() {
  drawMatrix(player.matrix, player.pos);
}

function merge(arena, player) {
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = 'red';
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

function playerRotate(dir) {
  // Take the current position and ++
  // Need to add a collide function
}

function playerDrop() {
  player.pos.y++;
  dropCounter = 0;
}

function playerMove(offset) {}

function playerReset() {}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    player.pos.y++;
    dropcounter = 0;
  }

  draw();
  requestAnimationFrame(update);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    playerMove(-1);
  } else if (event.key === 'ArrowRight') {
    playerMove(1);
  } else if (event.key === 'ArrowDown') {
    playerDrop();
  } else if (event.key === 'q') {
    playerRotate(-1);
  } else if (event.key === 'w') {
    playerRotate(1);
  }
});

const arena = createMatrix(12, 20);

const player = {
  pos: { x: 5, y: 5 },
  matrix: matrix,
};

update();
