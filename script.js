// script.js

// Highlight active nav link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
  // Logo animation on load
  const logo = document.querySelector('.logo');
  logo.style.animation = 'logoReveal 1.2s ease-out forwards';
  
  // Scroll reveal for sections
  const revealElements = document.querySelectorAll('section');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
        element.style.opacity = '1';
      }
    });
  };
  
  // Initial check on load
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // Service cards hover effect enhancement
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.03)';
      card.style.boxShadow = '0 15px 30px rgba(20, 168, 93, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    });
  });
  
  // Images hover effect
  const images = document.querySelectorAll('#about img');
  images.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.03)';
      img.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });
    
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.boxShadow = 'none';
    });
  });
});
