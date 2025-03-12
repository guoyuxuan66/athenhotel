document.addEventListener('DOMContentLoaded', function() {
  // 滚动动画效果
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
});
