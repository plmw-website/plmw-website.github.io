function setMascotImage(name) {
  let mascot = document.getElementById('mascot');
  let imgurl = `url('images/mascots/${name}.avif')`;
  mascot.style.backgroundImage = imgurl;
}

// Function to update active nav item
function updateActiveNavItem() {
  const sections = document.querySelectorAll('section, body');
  const navItems = document.querySelectorAll('nav ul li a');

  let currentSectionId = 'about';
  let minDist = 99999;

  sections.forEach(section => {
    const sectionTop = section.offsetTop; // Adjust this value based on your header height
    const sectionHeight = section.clientHeight;
    let dist = (window.scrollY + window.innerHeight*0.2) - sectionTop;
    if(dist > 0 && dist < minDist) {
      minDist = dist;
      currentSectionId = section.id;
    }
  });

  console.log(currentSectionId)

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSectionId}`) {
      item.classList.add('active');
    }
  });

  // set mascot image based on current section
  setMascotImage(currentSectionId);
}

// Update active nav item on scroll
window.addEventListener('scroll', updateActiveNavItem);

// Update active nav item on page load
window.addEventListener('load', updateActiveNavItem);

// Smooth scroll to section when clicking nav items
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    // Scroll to the section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Set the URL hash
    window.location.hash = this.getAttribute('href');
  });
});

// add hover actions to the links to set the mascot image
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('mouseover', function (e) {
    setMascotImage(this.getAttribute('href').substring(1));
  });
});

// on nav mouseout, set mascot image based on current section
document.querySelector('nav').addEventListener('mouseout', function (e) {
  updateActiveNavItem();
});

// preload all mascot images
document.querySelectorAll('nav ul li a').forEach(anchor => {
  let img = new Image();
  img.src = `images/mascots/${anchor.getAttribute('href').substring(1)}.avif`;
});