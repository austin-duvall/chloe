fetch('./components/quotes/quotes.css')
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);

    fetch('./components/quotes/quotes.html')
      .then(response => response.text())
      .then(componentHtml => {
        document.getElementById('quotesDiv').innerHTML = componentHtml;
      })
  })