express = require('express');
var app = express();
var request = require('request');

var app = express();
var request = require('request');


app.get("/api/rates", function (req, res) {
  res.send("hello world")
  console.log("Request made to the Currency Rate Page");
    let base = req.query.base
      let currency = req.query.currency
        let url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`
          request(url, function(error, response, body) {
              if (!error && response.statusCode == 200) {
                    var data = JSON.parse(body);
                          res.send(data);
                              }
                                })
                                });


app.get("*", function(req, res) {
  console.log("Request made to the Catch-all Page");
    res.send("Sorry,  rates are not available.....");
});
const PORT = process.env.PORT || 3000;  

app.listen(PORT, () => {
  console.log("hello")
})