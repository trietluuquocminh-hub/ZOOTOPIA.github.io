const whales = [];

//Ném link gif
const creatureImages = [
  'https://i.pinimg.com/originals/10/0c/17/100c172fb82210f7b7aaaeb0cdc904dd.gif',
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2pvMHg0bTVpc3EzcHZlM2cwd2N5YnFxZDBmMTZicHN4ajJwdjdkbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5QMKspne3I3yOk40fl/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXRramVrbWF6aTd1anF1MG1qMmFhaWZwMzRlcW54aTE5ZGRkanNtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yybzx6pV8N7ziQTaJ0/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXRramVrbWF6aTd1anF1MG1qMmFhaWZwMzRlcW54aTE5ZGRkanNtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yybzx6pV8N7ziQTaJ0/giphy.gif',
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnZxY29kbnhqNzE2aWZwbWZkN3YxNmFoazZ1bmp6azAyNXVzZWViZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XWj51fkipHFMUNP8xB/giphy.gif',
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDdvdDNzZWgyMnI0Z3p6MmxrZHYybG1wdjdmenp6YmFkZmYzaWQ1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/s7tpEMLzriGWuRIi0e/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXBsNGZhZ2x3dTIza2xsNWJ4dm56Z2ZmYmk2Y2J6aDQ3YnlvbDY4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TlrMw5S8m50LwokFcl/giphy.gif',
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJnZ2Vrem5vZncxeDNocDIxa2t3OHQyYmh0eGtkOXlnd2ZscGlwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/621nhiYcf5pWS8yfmT/giphy.gif',
  'https://raw.githubusercontent.com/soda2611/soda2611.github.io/refs/heads/main/fish-tank/images/turtle.gif',
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJnZ2Vrem5vZncxeDNocDIxa2t3OHQyYmh0eGtkOXlnd2ZscGlwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/621nhiYcf5pWS8yfmT/giphy.gif',
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJnZ2Vrem5vZncxeDNocDIxa2t3OHQyYmh0eGtkOXlnd2ZscGlwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/621nhiYcf5pWS8yfmT/giphy.gif',
  ''

];

//Dựng hình ngẫu nhiên ở tọa độ ramdom
creatureImages.forEach(src => {
  const creature = document.createElement('img');
  creature.src = src;
  creature.className = 'whale';
  document.body.appendChild(creature);
  whales.push({
    el: creature,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? -1 : 1),
    vy: (Math.random() * 0.3 + 0.1) * (Math.random() < 0.5 ? -1 : 1)
  });
});

//Bong bóng nước nổ bụp bụp
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
    bubble.style.opacity = `${by / window.innerHeight}`;
    if (by < 0) {
      clearInterval(interval);
      bubble.remove();
    }
  }, 16);
}

// Hàm di chuyển
function animate() {
  whales.forEach(w => {
    w.x += w.vx;
    w.y += w.vy;

    if (w.x > window.innerWidth - 150 || w.x < 0) w.vx *= -1;
    if (w.y > window.innerHeight - 150 || w.y < 0) w.vy *= -1;

    const scale = 0.5 + (w.y / window.innerHeight);
    w.el.style.width = `${150 * scale}px`;
    w.el.style.left = `${w.x}px`;
    w.el.style.top = `${w.y}px`;

    // Xử lý mấy khứa nào bị ảnh ngược
    if (w.el.src.includes('https://raw.githubusercontent.com/soda2611/soda2611.github.io/refs/heads/main/fish-tank/images/turtle.gif')) {
      w.el.style.transform = w.vx > 0 ? 'scaleX(1)' : 'scaleX(-1)';
    } else {
      w.el.style.transform = w.vx > 0 ? 'scaleX(-1)' : 'scaleX(1)';
    }

    if (Math.random() < 0.05) {
      createBubble(w.x + 75 * scale, w.y + 30 * scale);
    }
  });
  requestAnimationFrame(animate);
}
//Rong biển
requestAnimationFrame(animate);
const seaweedCount = 8;
for (let i = 0; i < seaweedCount; i++) {
  const seaweed = document.createElement('img');
  seaweed.src = 'https://raw.githubusercontent.com/soda2611/soda2611.github.io/refs/heads/main/fish-tank/images/seaweed.gif';
  seaweed.className = 'seaweed';
  seaweed.style.left = `${(i / seaweedCount) * window.innerWidth}px`; // trải đều theo chiều ngang
  document.body.appendChild(seaweed);
}

function createFishSchool(count = 10) {
  const fishes = [];
  for (let i = 0; i < count; i++) {
    const fish = document.createElement('img');
    fish.src = 'https://raw.githubusercontent.com/soda2611/soda2611.github.io/refs/heads/main/fish-tank/images/faintSchool.png';
    fish.className = 'fish';
    fish.style.position = 'absolute';
    fish.style.width = '80px';
    fish.style.top = `${Math.random() * 100}px`;
    fish.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(fish);

    fishes.push({
      el: fish,
      x: parseFloat(fish.style.left),
      y: parseFloat(fish.style.top),
      vx: (Math.random() * 1 + 0.5) * (Math.random() < 0.5 ? -1 : 1)
    });
  }

  function animateSchool() {
    fishes.forEach(f => {
      f.x += f.vx;
      if (f.x > window.innerWidth - 80 || f.x < 0) {
        f.vx *= -1;
      }
      f.el.style.left = `${f.x}px`;
      f.el.style.transform = f.vx > 0 ? 'scaleX(-1)' : 'scaleX(1)';
    });
    requestAnimationFrame(animateSchool);
  }

  requestAnimationFrame(animateSchool);
}
createFishSchool(12);
