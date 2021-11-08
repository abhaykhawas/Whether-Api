const request = require('request');
request('https://api.openweathermap.org/data/2.5/weather?q=dhanbad&units=metric&appid=991303112a9849a51fe95dd0e32e7434', function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var pD = JSON.parse(body)
  console.log('body:', pD["main"]["temp"]); // Print the HTML for the Google homepage.
});

// https://api.openweathermap.org/data/2.5/weather?q=dhanbad&appid=991303112a9849a51fe95dd0e32e7434