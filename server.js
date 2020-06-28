const express = require("express");
const bodyParser = require('body-parser');
const http = require("http");
var libgen = require("libgen")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const server = http.createServer(app);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/search", async (req, res) => {
    
    try {
        const res = await libgen.random.text(req.body)
        console.log("data", res);
        res.json(res);
      } catch (err) {
        res.send({ errorCode: 1200 });
      }
});

server.listen(process.env.PORT || 7000, () => console.log('server is running on port 8000'));