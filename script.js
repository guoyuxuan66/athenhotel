document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', function() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.75) {
        section.classList.add('fade-in');
      }
    });
  });
});
