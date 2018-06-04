let trainersData = require("../data/trainers");

module.exports = (app) => {
    app.get("/api/trainers", (req, res) => {
        res.json(trainersData);
    })

    app.post("/api/trainers", (req, res) => {

        let pairedWithObj = {};
        let compatibility = 99999; //0 is in reference to perfect compatibility
        //TODO: Get corresponding person's objectData        
        for (let i = 0; i < trainersData.length; i++) {
            let checkCompat = 0;
            for(let j = 0; j < trainersData[i]["trainerPref"].length; j++){
                checkCompat += Math.abs(req["body"]["trainerPref"][j] - trainersData[i]["trainerPref"][j]);
            }
            if(checkCompat < compatibility){
                pairedWithObj = trainersData[i];
                compatibility = checkCompat;
            }
            // console.log(checkCompat);
        }

        // console.log(pairedWithObj);

        trainersData.push(req.body);
        res.json(pairedWithObj);
    })
};