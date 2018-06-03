let trainersData = require("../data/trainers");

module.exports = (app) => {
    app.get("/api/trainers",(req,res) => {
        res.json(trainersData);
    })
};