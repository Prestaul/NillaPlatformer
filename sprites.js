function getImage(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = path;
  });
}

export async function loadSprites() {
  const tiles = await getImage('/assets/tiles_packed.png');
  
  return {
    tiles: {
      img: tiles,
      packed: true,
      gridSize: 18
    }
  };
}