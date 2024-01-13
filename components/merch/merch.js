$(document).ready(function() {
  const container = $("#slideshow");
  let scrollDirection = 1;

  const scrollInterval = setInterval(() => {
    const scrollWidth = container.prop("scrollWidth");
    const scrollLeft = container.scrollLeft();

    if (scrollLeft === 0 || scrollLeft + container.width() >= scrollWidth) {
      scrollDirection *= -1;
    }

    container.scrollLeft(scrollLeft + 1 * scrollDirection);
  }, 20);
});
