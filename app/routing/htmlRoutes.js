var path = require("path");


// Routes
// ==============================================================================
module.exports = function(app) {
    app.get("*", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname, "survey.html"));
    });
};
