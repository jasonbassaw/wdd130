const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who prepare for it today.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones."
  ];

  let quoteIndex = 0;
  const quoteElement = document.getElementById("quote-slideshow");

  function showNextQuote() {
    quoteElement.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }

  showNextQuote();
  setInterval(showNextQuote, 5000);