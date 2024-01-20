fetch('./components/social pop out/social.css')
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);

    fetch('./components/social pop out/social.html')
      .then(response => response.text())
      .then(componentHtml => {
        document.getElementById('socialDiv').innerHTML = componentHtml;

        // Load social.js after HTML and CSS are in place
        const script = document.createElement('script');
        script.src = './components/social pop out/social.js';
        document.head.appendChild(script);

        // Initialize any social pop-out logic here (if needed)
      });
  });
