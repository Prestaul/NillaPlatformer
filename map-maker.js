import { loadSprites } from '/sprites.js';

const TAU = Math.PI * 2;
const GRID_SIZE = 18;

const WIDTH = 1200;
const HEIGHT = 300;

function initPalette(tiles) {
  const canvas = document.getElementById('palette');
  canvas.width = tiles.img.width;
  canvas.height = tiles.img.height;
  const ctx = canvas.getContext('2d', { alpha: false });

  ctx.drawImage(tiles.img, 0, 0);

  return { ctx };
}

function initMap(tiles) {
  const canvas = document.getElementById('map');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d', { alpha: false });

  ctx.fillStyle = '#9cf';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  return {
    ctx,
    cells: [
      [[1, 1], [2, 1], [2, 1], [2, 1], [3, 1]],
      [[1, 6], [2, 6], [2, 6], [2, 6], [3, 6]],
      [[1, 7], [2, 7], [2, 7], [2, 7], [3, 7]],
    ],
    render() {
      const { cells } = this;
      for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells[y].length; x++) {
          ctx.drawImage(
            tiles.img,
            GRID_SIZE * cells[y][x][0], GRID_SIZE * cells[y][x][1],
            GRID_SIZE, GRID_SIZE,
            GRID_SIZE * x, GRID_SIZE * y,
            GRID_SIZE, GRID_SIZE
          );
        }
      }
    }
  };
}

async function main() {
  const { tiles } = await loadSprites();
  const palette = initPalette(tiles);
  const map = initMap(tiles);

  map.render();
}

main();
