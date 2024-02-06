// Thanks to Useful Programmer Youtube channel
window.onload = go;
function go() {
  // Triggers genRQ when New Quote button is clicked
  $("#new-quote").click(function() {
    genRQ();
  });
  
  $("#tweet-quote").click(function() {
    
  });

  // Generate a random quote when window is loaded initially
	genRQ();
}

// Generates a random quote 
function genRQ() {
  var quotes = [{
		id: 1,
		text: "Laughter is the best medicine.",
		source: "I 1"
	},
	{
		id: 2,
		text: "God helps those who helps themselves",
		source: "I 2"
	},
	{
		id: 3,
		text: "Live and let live",
		source: "I 3"
	},
	{
		id: 4,
		text: "Try and try but never cry",
		source: "I 4"
	},
	{
		id: 5,
		text: "Nothing is impossible",
		source: "I 5"
	},
];
  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
  $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.source));
}


// This function makes strings into click to tweet URLS
function stringToClickToTweetURL(str) {
  
  // Convert to Click to Tweet URL
  var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");

  // Put 'Click to Tweet' URL suffix at the begining
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  // Return properly formatted "Click to Tweet URL"
  return resultString;
}