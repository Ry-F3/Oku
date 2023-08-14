
var btc = document.getElementById("bitcoin");
var bnb = document.getElementById("binance");
var doge = document.getElementById("dogecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbinancecoin%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
};

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    bnb.innerHTML = response.binancecoin.usd;
    doge.innerHTML = response.dogecoin.usd.toFixed(3);

});

// Code used and found on a blog called code prime. Some alterations have been made.