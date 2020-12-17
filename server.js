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

// Points the server to a series of "route" files
// These routes tell the server how to respond to users

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);






// Starts the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});