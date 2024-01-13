const countdownDate = new Date('Aug 20, 2024 00:00:00').getTime();

const x = setInterval(function() {
  const now = new Date().getTime();

  const distance = countdownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = `
    <ul>
      <li>
        <h1>${days}</h1>
        <h2>DAYS</h2>
      </li>
      <li>
        <h1>${hours}</h1>
        <h2>HOURS</h2>
      </li>
      <li>
        <h1>${minutes}</h1>
        <h2>MINUTES</h2>
      </li>
      <li>
        <h1>${seconds}</h1>
        <h2>SECONDS</h2>
      </li>
    </ul>
  `;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('timer').innerHTML = 'TOUR';
  }
}, 1000);