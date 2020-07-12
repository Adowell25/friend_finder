// LOAD DATA
var friendData = require("../data/friends");


// ROUTING
module.exports = (app) => {

    // GET Requests
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    // POST Requests
    app.post("/api/friends", (req, res) => {
        var userScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;


        for (var i = 0; i < friendData.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScore[j])))
            }
            scoresArr.push(scoreDiff);
        }

        // loop scoresArr
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        // return the best match
        var newFriend = friendData[bestMatch];
        res.json(newFriend);
        friendData.push(req.body)

    });


    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};