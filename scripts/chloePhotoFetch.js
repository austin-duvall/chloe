fetch('./components/chloe photo/chloePhoto.css')
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);

    fetch('./components/chloe photo/chloePhoto.html')
      .then(response => response.text())
      .then(componentHtml => {
        document.getElementById('chloePhotoDiv').innerHTML = componentHtml;
      })
  })