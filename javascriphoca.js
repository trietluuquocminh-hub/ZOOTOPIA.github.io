const whaleSrc = 'https://png.pngtree.com/recommend-works/png-clipart/20250614/ourmid/pngtree-cute-cartoon-blue-whale-illustration-png-image_16535762.png';
const whales = [];

for (let i = 0; i < 3; i++) {
  const whale = document.createElement('img');
  whale.src = whaleSrc;
  whale.className = 'whale';
  document.body.appendChild(whale);
  whales.push({
    el: whale,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? -1 : 1),
    vy: (Math.random() * 0.3 + 0.1) * (Math.random() < 0.5 ? -1 : 1)
  });
}

function createBubble(x, y) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;
  document.body.appendChild(bubble);

  let by = y;
  const interval = setInterval(() => {
    by -= 2;
    bubble.style.top = `${by}px`;
    if (by < 0) {
      clearInterval(interval);
      bubble.remove();
    }
  }, 16);
}

function animate() {
  whales.forEach(w => {
    w.x += w.vx;
    w.y += w.vy;

    if (w.x > window.innerWidth - 150 || w.x < 0) {
      w.vx *= -1;
    }
    if (w.y > window.innerHeight - 150 || w.y < 0) {
      w.vy *= -1;
    }

    const scale = 0.5 + (w.y / window.innerHeight);
    w.el.style.width = `${150 * scale}px`;
    w.el.style.left = `${w.x}px`;
    w.el.style.top = `${w.y}px`;

    w.el.style.transform = w.vx > 0 ? 'scaleX(-1)' : 'scaleX(1)';

    if (Math.random() < 0.05) {
      createBubble(w.x + 75 * scale, w.y + 30 * scale);
    }
  });
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
