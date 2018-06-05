let trainersData = require("../data/trainers");

module.exports = (app) => {
    app.get("/api/trainers", (req, res) => {
        res.json(trainersData);
    })

    app.post("/api/trainers", (req, res) => {

        let pairedWithObj = {};
        let compatibility = 99999; //0 is in reference to perfect compatibility
        // Get corresponding person's objectData        
        for (let i = 0; i < trainersData.length; i++) {
            let checkCompat = 0;
            for (let j = 0; j < trainersData[i]["trainerPref"].length; j++) {
                checkCompat += Math.abs(req["body"]["trainerPref"][j] - trainersData[i]["trainerPref"][j]);
            }
            if (checkCompat < compatibility) {
                pairedWithObj = trainersData[i];
                compatibility = checkCompat;
            }
            // console.log(checkCompat);
        }

        // console.log(pairedWithObj);

        trainersData.push(req.body);
        res.json(pairedWithObj);
    })

    //link to reset the array to default, not provided in html.
    app.get('/resetInfoToDefault', (req, res) => {
        console.log("entered");
        let defaultArr = [
            {
                trainerName: "Ash Ketchum",
                trainerEmail:"AshKetchum@PalletTown.com",
                trainerPhone:"415-555-8888",
                trainerImage: "http://cdn.playbuzz.com/cdn/7649eea9-e2e8-4001-906e-d647321a5533/ad720a79-5767-477f-85ea-f398b414d509_560_420.jpg",
                trainerPref: [5,5,5,5,5,5,5,5,5,5]
            },
            {
                trainerName: "Tom Ato",
                trainerEmail:"TomAto@PalletTown.com",
                trainerPhone:"415-555-8888",
                trainerImage: "https://i.ytimg.com/vi/oKBXSKMXUCY/maxresdefault.jpg",
                trainerPref: [1,1,1,1,1,1,1,1,1,1]
            }
        ];

        trainersData.length = 0;
        trainersData.push(defaultArr[0]);
        trainersData.push(defaultArr[1]);

    res.json(trainersData);
    })
};