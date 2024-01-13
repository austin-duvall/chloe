document.addEventListener('DOMContentLoaded', function() {
  const slideUpElements = document.querySelectorAll('.fadeIn');

  window.addEventListener('scroll', function() {
    slideUpElements.forEach(function(element) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = element.offsetTop;

      if (scrollPosition > elementPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  });
});