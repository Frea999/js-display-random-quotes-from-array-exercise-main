"use strict";

const quotes = [
" life is like a sandwich no matter which way you flip it, the bread comes first",
"The light at the end of the tunnel might be an oncoming train.",
"its never too late to give",
"You tried your best and you failed. The lesson is: never try.",
"They say nothing is impossible but I do nothing everyday -Winnie the Pooh",
"Trying is the first step to failure",
"Every dead body on Mt. Everest was once a highly motivated person,"

];

function getRandomQuote() {
  if (quotes.length === 0) {
    return "ikke flere citater";
  } 
  // hvorfor laver vi en return når den skifter imellem alle citaterne?

  const randomIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomIndex];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  document.getElementById("quotes").textContent = randomQuote; 
}

document
  .getElementById("displayQuoteBtn")
  .addEventListener("click", displayRandomQuote);