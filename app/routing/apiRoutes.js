//Get the array of possible friends from friends.js

var friendsData = require("../data/friends.js");

console.log("apiRoutes.js is linked");

console.log("friendsData is ");
console.log(friendsData);

//Routing

module.exports = function(app) {

//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

app.get("/api/friends/", function(req, res) {
    res.json(friendsData);
    console.log("friendsData is ");
    console.log(friendsData);
    console.log("res is ");
    console.log(res);
});

//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

app.post("/api/friends/", function (req, res){
    console.log("This is from inside the POST route");
    console.log("req.body is:");
    console.log(req.body);
    console.log("res is: ");
    console.log(res);
})


}