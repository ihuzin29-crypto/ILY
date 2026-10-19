const startBtn = document.getElementById('startBtn');
const catOverlay = document.getElementById('catOverlay');
const mainContent = document.getElementById('mainContent');
const ui = document.getElementById('ui');

const totalItems = 70;
const elements = [];

for (let i = 0; i < totalItems; i++) {
  const love = document.createElement('div');
  love.className = 'love';
  love.innerHTML = `<div class="love_word">i love you</div>`;
  ui.appendChild(love);

  elements.push({
    element: love,
    offset: i / totalItems
  });
}

let angleOffset = 0;

function animate() {
  angleOffset += 0.0015;

  elements.forEach((item) => {
    let t = (item.offset + angleOffset) * Math.PI * 2;

    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

    const scale = 18;
    const posX = x * scale;
    const posY = y * scale;

    item.element.style.left = `calc(50% + ${posX}px)`;
    item.element.style.top = `calc(50% + ${posY}px)`;
  });

  requestAnimationFrame(animate);
}

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  catOverlay.classList.remove('hidden');

  // Время показа котика (2.2 секунды), после чего открывается сердце с главной фотографией
  setTimeout(() => {
    catOverlay.classList.add('hidden');
    mainContent.classList.remove('hidden');
    animate();
  }, 2200);
});