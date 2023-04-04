const quotes = [
  {
    quote: "Everything that I understand, I understand only because I love.",
    author: "Leo Tolstoy",
  },
  {
    quote : "We know accurately only when we know little; with knowledge doubt increases.",
    author : "Johann Wolfgang von Goethe",
  },
  {
    quote : "When you see a good man, try to emulate his example, and when you see a bad man, search yourself for his faults.",
    author : "Confucius",
  },
  {
    quote : "Life is just one damned thing after another.",
    author : "Elbert Hubbard",
  },
  {
    quote : "There's a lot to be said for self-delusionment when it comes to matters of the heart.",
    author : "Diane Frolov",
  },
  {
    quote : "The worst crime is faking it.",
    author : "Kurt Cobain",
  },
  {
    quote : "Great hopes make great men.",
    author : "Thomas Fuller",
  },
  {
    quote : "They always say time changes things, but you actually have to change them yourself.",
    author : "Andy Warhol",
  },
  {
    quote : "The superior man is modest in his speech, but excels in his actions.",
    author : "Confucius",
  },
  {
    quote : "If you can concentrate always on the present, you'll be a happy man.",
    author : "Paulo Cuelho",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 반올림 Math 함수 3가지
// Math.round()
// Math.ceil()
// Math.floor(Math.random() * 10);

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;