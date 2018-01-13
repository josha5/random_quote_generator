$(document).ready(function() {
  var randomNum;
  var randomQuote;
  var randomAuthor;
  
  function getQuotes() {
    var quotes = ["Every new beginning comes from some other beginning's end.", "I have not failed. I have just found 10,000 ways that won't work.", "Friends show their love in times of trouble, not in happiness.", "Behind every great man is a woman rolling her eyes.", "Don’t wait. The time will never be just right.", "No man has a good enough memory to be a successful liar.", "I buy expensive suits. They just look cheap on me.", "If women ran the world we wouldn't have wars, just intense negotiations every 28 days.", "Progress is man's ability to complicate simplicity.", "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.", "It's simple, if it jiggles, it's fat.", "If I had to live my life again, I'd make the same mistakes, only sooner.", "I love mankind; it's people I can't stand.", "If you don't mind, it doesn't matter.", "Man cannot live by bread alone; he must have peanut butter.", "Reality continues to ruin my life.", "If a cluttered desk is the sign of a cluttered mind, what is the significance of a clean desk?", "Without requirements or design, programming is the art of adding bugs to an empty text file.", "The cheapest, fastest, and most reliable components are those that aren’t there.", "Insanity: doing the same thing over and over again and expecting different results."];
    var author = ["- Seneca", "- Thomas A Edison", "- Euripides", "- Jim Carrey", "- Napoleon Hill", "- Abraham Lincoln", "- Warren Buffet","- Robin Williams", "- Thor Heyerdahl", "- Steve Jobs", "- Arnold Schwarzenegger", "- Tallulah Bankhead", "- Charles M. Schulz", "- Jack Benny", "- James Garfield", "- Bill Watterson", "- Laurence J. Peter", "- Louis Srygley", "- Gordon Bell", "- Albert Einstein"];
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];  
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  
  $("#newquote").on("click", function(){
    getQuotes();
  });
  
  $("#tweet").on("click", function() {
   window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + randomAuthor);
  });
  
});