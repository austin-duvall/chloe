fetch('./components/album/album.css')
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);

    fetch('./components/album/album.html')
      .then(response => response.text())
      .then(componentHtml => {
        document.getElementById('albumDiv').innerHTML = componentHtml;
        const script = document.createElement('script');
        script.src = './components/album/album.js';
        document.head.appendChild(script);
      });
  });