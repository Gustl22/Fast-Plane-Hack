const express = require("express");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);

httpServer.listen(3000, "127.0.0.1");

app.get("/", (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    const planeGotHacked = (req.query.hacked === 'true');

    res.status(200).send({
        gotHacked: planeGotHacked
    });

});