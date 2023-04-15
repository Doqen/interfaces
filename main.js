function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'quotes.json', true);
  xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
          callback(xobj.responseText);
      }
  };
  xobj.send(null);
}

function generateQuote() {
  loadJSON(function(response) {
    var data = JSON.parse(response);
    console.log(data);
    var quotes = data.quotes;
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    var quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = "<q>" + randomQuote.text + "</q><br><em>" + randomQuote.author + "</em>";
  });
}


// Attach an event listener to the Generate button
var generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", generateQuote);