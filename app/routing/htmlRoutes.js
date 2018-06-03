let path = require("path");

module.exports = (app) => {

    app.get("/registration", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/registration.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}

