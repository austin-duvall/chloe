fetch('./components/merch/merch.css')
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);

    fetch('./components/merch/merch.html')
      .then(response => response.text())
      .then(componentHtml => {
        document.getElementById('merchDiv').innerHTML = componentHtml;
        const script = document.createElement('script');
        script.src = './components/merch/merch.js';
        document.head.appendChild(script);
      });
  });