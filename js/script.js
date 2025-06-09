function tryClothing(imagePath) {
    const clothingElement = document.getElementById('clothing');
    clothingElement.src = imagePath;
    
    // Add a fade-in effect
    clothingElement.style.opacity = '0';
    setTimeout(() => {
        clothingElement.style.opacity = '1';
    }, 50);
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation for images
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Hamburger menu toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
}

// Dropdown open on mobile
document.querySelectorAll('.nav-dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    }
  });
});
