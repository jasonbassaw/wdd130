const quotes = [
    "“A simple but powerful reminder of the positive domino effect a good education can have on many aspects of a person’s life and outlook.” – Confucius",
    "“The more that you read, the more things you will know, the more that you learn, the more places you’ll go.” – Dr. Seuss",
    "“Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.” – Maimonides",
    "“As technology changes the way we communicate, connect, create, consume and innovate, it is democratising access to opportunity. Education is no exception.” – Laura Andreessen"
  ];
  
  let quoteIndex = 0;
  const quoteText = document.getElementById("quote-text");
  
  function showNextQuote() {
    quoteText.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = quotes[quoteIndex];
      quoteText.style.opacity = 1;
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 500);
  }
  
  showNextQuote();
  setInterval(showNextQuote, 5000);
  
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  

