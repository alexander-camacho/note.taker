// Dependencies
// =============================================================
const fs = require('fs')
const http = require('http')
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes to send the user to the pages
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


// Starts the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});