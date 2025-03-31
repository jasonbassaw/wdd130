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
    quoteElement.style.opacity = 0;
    setTimeout(() => {
      quoteElement.textContent = quotes[quoteIndex];
      quoteElement.style.opacity = 1;
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 500);
  }
  
  showNextQuote();
  setInterval(showNextQuote, 5000);
  