document.addEventListener('DOMContentLoaded', () => {
  const front = document.getElementById('front-page');
  const main = document.getElementById('main-content');
  const envelope = document.getElementById('envelope');
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popupLetter');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  // floating hearts
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-shape';
    heart.innerHTML = '💚';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (6 + Math.random() * 5) + 's';
    heart.style.fontSize = (14 + Math.random() * 28) + 'px';
    document.body.appendChild(heart);
  }
/* --- Typewriter effect for front page headline --- */
const frontText = document.querySelector('#front-page h1');
const frontContent = frontText.textContent;
frontText.textContent = '';
let idx = 0;
const frontInterval = setInterval(() => {
  frontText.textContent += frontContent.charAt(idx);
  idx++;
  if (idx >= frontContent.length) clearInterval(frontInterval);
}, 50);

/* --- Random floating mini hearts in main content --- */
setInterval(() => {
  const miniHeart = document.createElement('div');
  miniHeart.className = 'mini-heart';
  miniHeart.innerHTML = '💚';
  miniHeart.style.left = Math.random() * 100 + 'vw';
  miniHeart.style.fontSize = (10 + Math.random() * 15) + 'px';
  miniHeart.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(miniHeart);
  setTimeout(() => miniHeart.remove(), 8000);
}, 800);

  // buttons
  yesBtn.addEventListener('click', () => {
    front.style.opacity = '0';
    setTimeout(() => {
      front.style.display = 'none';
      main.classList.add('show');
    }, 700);
  });

  noBtn.addEventListener('click', () => {
    alert("Awww... okay maybe later 😢");
  });

// envelope click flap + popup
envelope.addEventListener('click', () => {
  envelope.querySelector('.flap').classList.add('open');
  overlay.classList.add('show');
  popup.classList.add('show');

  // Disable scrolling only on desktop
  if (window.innerWidth > 600) {
    document.body.style.overflow = 'hidden';
  }
});

    // Trigger fade-in for paragraphs like typewriter
    const paragraphs = popup.querySelectorAll('p');
    paragraphs.forEach((p, i) => {
      p.style.opacity = 0;
      p.style.animation = `fadeText 1s forwards ${i * 0.3}s`;
    });

    spawnConfetti(80); // confetti
  });

 // close popup
overlay.addEventListener('click', () => {
  envelope.querySelector('.flap').classList.remove('open');
  overlay.classList.remove('show');
  popup.classList.remove('show');

  // Enable page scrolling again
  document.body.style.overflow = window.innerWidth > 600 ? 'auto' : 'auto';
});


    // Enable page scrolling again
    document.body.style.overflow = 'auto';
  });

  // Confetti
  function spawnConfetti(count) {
    for (let i = 0; i < count; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-10px';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
      document.body.appendChild(confetti);
      let falling = setInterval(() => {
        confetti.style.top = (parseInt(confetti.style.top) + Math.random() * 5 + 2) + 'px';
        confetti.style.left = (parseInt(confetti.style.left) + Math.random() * 4 - 2) + 'px';
        if(parseInt(confetti.style.top) > window.innerHeight){
          confetti.remove();
          clearInterval(falling);
        }
      }, 16);
    }
  }
});
/* --- Additional Enhancements --- */

// 1. Sparkle particles
for (let i = 0; i < 25; i++) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.animationDelay = Math.random() * 6 + 's';
  document.body.appendChild(sparkle);
}

// 2. Floating birthday messages
const messages = ['💚', '💚', '💚', '💚'];
messages.forEach((msg, i) => {
  const span = document.createElement('div');
  span.className = 'floating-msg';
  span.textContent = msg;
  span.style.left = (10 + i * 20) + 'vw';
  span.style.animationDelay = (i * 2) + 's';
  document.body.appendChild(span);
});

// 3. Typewriter effect for popup letter
const originalPopupClick = envelope.onclick || (() => {});
envelope.onclick = () => {
  originalPopupClick(); // run original click event

  const paragraphs = popup.querySelectorAll('p');
  paragraphs.forEach((p) => {
    const text = p.textContent;
    p.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      p.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 15);
  });
};

