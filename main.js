  // ===== TYPING ANIMATION =====
  const phrases = ['Frontend Developer','API Architect','Systems Programmer','DSA Enthusiast','CS Engineer'];
  let phraseIndex = 0, charIndex = 0, deleting = false;
  const typingEl = document.getElementById('typing-text');
  function type() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      typingEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      typingEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 55 : 110);
  }
  setTimeout(type, 1200);

  // ===== PARTICLE CANVAS =====
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resizeCanvas() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resizeCanvas();
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4; this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '#a855f7' : '#22d3ee';
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.save(); ctx.globalAlpha = this.opacity; ctx.fillStyle = this.color;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    }
  }
  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80);
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }
  initParticles();
  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.save(); ctx.globalAlpha = (1 - dist/100) * 0.08;
          ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); ctx.restore();
        }
      }
    }
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); }); connectParticles();
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

  // ===== SCROLL FADE-IN =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ===== NAVBAR SHRINK ON SCROLL =====
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.padding = window.scrollY > 50 ? '0.6rem 4rem' : '1rem 4rem';
  });

  // ===== MOBILE NAV =====
  function openMobileNav() { document.getElementById('mobileNav').classList.add('open'); }
  function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }

  // ===== CONTACT FORM (opens mail client) =====
 

// ===== CONTACT FORM =====



async function handleContact() {

    alert("STEP 2");

    try {

        const response = await fetch("http://127.0.0.1:5000/");

        const text = await response.text();

        alert(text);

    } catch (error) {

        console.error("ERROR DETAILS:", error);

        alert(error.message);

    }

}