window.addEventListener('scroll', () => {
  const heroContent = document.querySelector('.hero-content');
  const position = heroContent.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }
});