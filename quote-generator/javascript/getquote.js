$(document).ready(function(){
  function getNewQuote(){

    $.ajax({

      url: "http://api.forismatic.com/api/1.0/",
      data:{
        method: "getQuote",
        lang: "en",
        format: "json",
      },
      success: function(response){
        console.log(response.quoteTest);
      }
    })
  }
getNewQuote();
});
