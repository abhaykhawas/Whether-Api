const express = require("express")
const app = express()
const port = 3000
const request = require('request');


app.get("/results", function(req, res){  
  request('https://api.openweathermap.org/data/2.5/weather?q=dhanbad&units=metric&appid=991303112a9849a51fe95dd0e32e7434', function (error, response, body) {
    var pD = JSON.parse(body)
    res.send(String(pD["main"]["temp"]));
  });
})
//pD["main"]["temp"]
// https://api.openweathermap.org/data/2.5/weather?q=dhanbad&appid=991303112a9849a51fe95dd0e32e7434


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})