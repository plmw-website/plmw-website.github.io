// Highlight the active nav link as the reader scrolls
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveNavItem() {
  let currentSectionId = 'about';

  sections.forEach(section => {
    const offset = section.offsetTop - window.innerHeight * 0.3;
    if (window.scrollY >= offset) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${currentSectionId}`;
    link.classList.toggle('active', isActive);
  });
}

window.addEventListener('scroll', updateActiveNavItem);
window.addEventListener('load', updateActiveNavItem);
