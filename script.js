// Function to update active nav item
function updateActiveNavItem() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('nav ul li a');

  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Adjust this value based on your header height
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSectionId}`) {
      item.classList.add('active');
    }
  });
}

// Update active nav item on scroll
window.addEventListener('scroll', updateActiveNavItem);

// Update active nav item on page load
window.addEventListener('load', updateActiveNavItem);

// Smooth scroll to section when clicking nav items
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});