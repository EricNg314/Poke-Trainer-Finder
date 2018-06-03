let trainersData = require("../data/trainers");

module.exports = (app) => {
    app.get("/api/trainers", (req, res) => {
        res.json(trainersData);
    })

    app.post("/api/trainers", function(req, res) {
        console.log("yay?");
        trainersData.push(req.body);
        res.json(true);
    })
};