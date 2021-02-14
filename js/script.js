/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The only man who never makes mistakes is the man who never does anything.",
    source: "Theodore Roosevelt",
    year: "1900"
  },
  {
    quote: "All our dreams can come true if we have the courage to pursue them.",
    source: "Walt Disney"
  },
  {
    quote: "It’s better to look ahead and prepare than to look back and regret.",
    source: "Jackie Joyner-Kersee"
  },
  {
    quote: "A good plan, violently executed now, is better than a perfect plan next week.",
    source: "George Patton"
  },
  {
    quote: "Financial freedom is available to those who learn about it and work for it.",
    source: "Robert Kiyosaki",
    tag: "finance"
  },
  {
    quote: "The greatest wealth is to live content with little.",
    source: "Plato"
  },
  {
    quote: "Stay committed to your decisions, but stay flexible in your approach.",
    source: "Tony Robbins"
  },
  {
    quote: "Never spend your money before you’ve earned it.",
    source: "Thomas Jefferson",
    tag: 'finance'
  },
  {
    quote: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    source: "Ayn Rand",
    tag: "finance"
  },
  {
    quote: "If there is no struggle, there is no progress.",
    source: "Frederick Douglass",
    year: "1857",
    citation: "West India Emancipation"
  }
]

/***
 * `getRandomQuote` function
***/

 //Generating a random number, multiplying it by the array length and rounding down to begin at 0 index.
const getRandomQuote = (array) => array[Math.floor(Math.random() * array.length)];

//Changing background color.
const backgroundGenerator = () => {
  //Build out the begining of the RGB statement
  let background = `rgb(`;
  //Loop through building the RGB color codes. Multiplying by 256 to get the full range from 0 to 255.
  for (let i = 0; i < 3; i++) {
    background += `${Math.floor(Math.random() * 256)}`;
    //Add a comma after the first two numbers
    if (i < 2) { background += `,` }
  }
  // Return the completed statement
  return background += `)`;
}
/*
 *Pretty backgrounds: This was created just to stick to a consistent color pallet.*
//Storing an array of colors
const backgroundColors = ['#001011','#093A3E','#3AAFB9','#64E9EE'];
//Creating a function that pulls that random color from the array. Same as getting random quote.
const getBackgroundColor = () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
*/

/***
 * `printQuote` function
***/
const printQuote = () => {
  //Begin the countdown and change quotes.
  clearInterval(intervalId);
  //Pull the random quote object
  let quote = getRandomQuote(quotes);
  //Begin building HTML, starting with a blank slate, because not all quotes have a 'tag'.
  let html = '';
  //Not all items have the custom tag that was added to the object, but it needs to be input before the rest of the HTML can be built.
  if (quote.tag) { html += `<p>${quote.tag.toUpperCase()}</p>`; }
  //Now build out the bulk of the HTML
  html += `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  //Not all items have citation and year, but need to accomodate them if they do
  if (quote.citation) { html += `<span class="citation">${quote.citation}</span>`; }
  if (quote.year) { html += `<span class="year">${quote.year}</span>` }
  //close out the HTML
  html += `</p>`;

  //Inject HTML into quote box div
  document.getElementById('quote-box').innerHTML = html;

  //Setting a custom background color on the body
  document.body.style.background = backgroundGenerator();

}

//Begin the countdown and changing quotes.
let intervalId = setInterval(() => { printQuote() }, 8000);

/*
Timer V2: Setting the timer to change the quote and bg every 8 seconds 
This was so it didn't pile up and give an epileptic effect. Just need to call this function in the global scope,
and then again in the printQuote function.
---------------------
function setTimer() {
  //Storing the interval Id in a variable so it can be cleared.
  let intervalId = setTimeout(() => { printQuote() }, 8000);
  //Check to see how many times the interval has ran, and clear all intervals up until current.
  if (intervalId > 1) {
    for (let i = 1; i < intervalId; i++) { 
      clearInterval(i);
    }
  }
}

*/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);