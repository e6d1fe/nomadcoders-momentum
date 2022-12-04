const quotes = [
  {
    quote: "Success is not final; failure is not fatal; It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote: "Success usually comes to those who are too busy looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote: "Either you run the day or the day runs you.",
    author: "Jim Rohn",
  },
  {
    quote: "Opportunities don't happen, you create them.",
    author: "Chriss Grosser",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "I'd rather regret the things I've done than regret the things I haven't done.",
    author: "Lucille Ball",
  },
  {
    quote: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    author: "Wayne Dyer",
  },
  {
    quote: "Set your goals high, and don't stop until you get there.",
    author: "Bo Jackson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
