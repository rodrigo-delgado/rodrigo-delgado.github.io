
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $(".quote-text").text(data.quoteText);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor;
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-text").text('Author: ' + data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#quote").on("click", function() {
  $.getJSON(url, getQuote, 'jsonp');
});
