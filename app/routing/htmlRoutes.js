// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = (app) => {

    // SURVEY Route
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //HOME Route
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};