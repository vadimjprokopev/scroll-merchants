const express = require("express");
const serveStatic = require("serve-static");
const { register, login } = require("./authentication.js");

const app = express();

app.use(express.json());
app.use(serveStatic(__dirname + "/../client/dist"));

app.post("/register", register);
app.post("/login", login);

var port = process.env.PORT || 5000;
app.listen(port);
