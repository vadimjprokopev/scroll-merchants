const express = require("express");
const { register, login, checkToken } = require("./authentication.js");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));

app.post("/register", register);
app.post("/login", login);
app.use(checkToken);

var port = process.env.PORT || 5000;
app.listen(port);
