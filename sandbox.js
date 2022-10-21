const TAU = Math.PI * 2;
const GRID_SIZE = 18;

const WIDTH = 800;
const HEIGHT = 600;

const canvasBg = document.getElementById('background');
canvasBg.width = WIDTH;
canvasBg.height = HEIGHT;
const ctxBg = canvasBg.getContext('2d', { alpha: false });

const canvasFg = document.getElementById('foreground');
canvasFg.width = WIDTH;
canvasFg.height = HEIGHT;
const ctxFg = canvasFg.getContext('2d');

const tiles = new Image();
tiles.onload = onLoaded;
tiles.src = './assets/tiles_packed.png';

ctxBg.fillStyle = '#9cf';
ctxBg.fillRect(0, 0, WIDTH, HEIGHT);

ctxFg.strokeStyle = '#fff';
ctxFg.lineWidth = 4;
ctxFg.beginPath();
ctxFg.arc(WIDTH / 2, HEIGHT / 2, 150, 0, TAU);
ctxFg.stroke();


const map = [
  [[1, 1], [2, 1], [2, 1], [2, 1], [3, 1]],
  [[1, 6], [2, 6], [2, 6], [2, 6], [3, 6]],
  [[1, 7], [2, 7], [2, 7], [2, 7], [3, 7]],
]

function onLoaded() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      ctxBg.drawImage(tiles, GRID_SIZE * map[y][x][0], GRID_SIZE * map[y][x][1], GRID_SIZE, GRID_SIZE, GRID_SIZE * x + 340, GRID_SIZE * y + 400, GRID_SIZE, GRID_SIZE);
    }
  }
}