const UCC_CONFIG = {
  discord: 'https://discord.gg/5qJXzfUGXn',
  youtube: 'https://youtube.com/@notan1123',
  roblox: ''
};

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
      });
    });
  }

  document.querySelectorAll('[data-link="discord"]').forEach(el => el.href = UCC_CONFIG.discord);
  document.querySelectorAll('[data-link="youtube"]').forEach(el => el.href = UCC_CONFIG.youtube);

  document.querySelectorAll('[data-link="roblox"]').forEach(el => {
    if (UCC_CONFIG.roblox) {
      el.href = UCC_CONFIG.roblox;
      el.classList.remove('btn-disabled');
      el.removeAttribute('aria-disabled');
    } else {
      el.href = '#';
      el.classList.add('btn-disabled');
      el.setAttribute('aria-disabled', 'true');
      el.title = 'Roblox game link will be added when the experience is published.';
    }
  });

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);
});
