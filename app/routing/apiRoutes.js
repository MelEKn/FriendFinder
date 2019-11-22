//Get the array of possible friends from friends.js

var friendsData = require("../data/friends.js");

console.log("apiRoutes.js is linked");

console.log("friendsData is ");
console.log(friendsData);

//Routing

module.exports = function(app) {

//A GET route with the url `/api/friends`.
//If the user goes to (server)/api/friends, the below shows a JSON of all possible friends.

app.get("/api/friends/", function(req, res) {
    res.json(friendsData);
    // console.log("friendsData is ");
    // console.log(friendsData);
    // console.log("res is ");
    // console.log(res);
});

//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

app.post("/api/friends/", function (req, res){
    // console.log("This is from inside the POST route");
    // console.log("req.body is:");
    // console.log(req.body);

    var userData = req.body;



    console.log("userData is ");
    console.log(userData);

    for(var i=0; i<10; i++){
        userData.scores[i] = parseInt(userData.scores[i]);
    }

    console.log("friendsData[0].scores is ");
    console.log(friendsData[0].scores);
    console.log("\n ---------------- \n");

    console.log("userData.scores is ");
    console.log(userData.scores);

    var totalDifference = [];

    for(var i=0; i<friendsData.length; i++){
        totalDifference[i] = 0;
    }

    console.log("Total difference is ");
    console.log(totalDifference);

    console.log("userData.scores.length is ");
    console.log(userData.scores.length);

    for(var i=0; i<friendsData.length; i++){
        for(var j=0; j<userData.scores.length; j++){
            totalDifference[i]+= Math.abs((friendsData[i].scores[j] - userData.scores[j]));
        }
        console.log("totalDifference[" + i + "] is ");
        console.log(totalDifference[i]);
    }

    console.log("totalDifference is ");
    console.log(totalDifference);

  

    var minValue = totalDifference.indexOf(Math.min.apply(null,totalDifference));

    console.log("minValue is " + minValue);

    var bestMatch = friendsData[minValue];

    // console.log("Best match: ");
    // console.log(bestMatch);

    res.json(bestMatch);

    
})


}