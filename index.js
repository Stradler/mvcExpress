const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://vironitdb:vironitdb42@ds161411.mlab.com:61411/vironitdb");

app.listen(3000, "localhost", () => console.log("Server has started"));