let trainersData = require("../data/trainers");

module.exports = (app) => {
    app.get("/api/trainers", (req, res) => {
        res.json(trainersData);
    })

    app.post("/api/trainers", function(req, res) {
        console.log("yay?");
        trainersData.push(req.body);

        //TODO: Get corresponding person's objectData        
        res.json(req.body);
    })
};