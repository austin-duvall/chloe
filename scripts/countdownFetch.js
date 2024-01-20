fetch('./components/countdown/countdown.css')
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);

    fetch('./components/countdown/countdown.html')
      .then(response => response.text())
      .then(componentHtml => {
        document.getElementById('countdownDiv').innerHTML = componentHtml;
        const script = document.createElement('script');
        script.src = './components/countdown/countdown.js';
        document.head.appendChild(script);
      });
  });
