var friendsData = require("../data/friends");

console.log("apiRoutes.js is linked");

console.log("friendsData is ");
console.log(friendsData);

//$(document).ready(function(){
$("#submitButton").on("click", function (event) {
    event.preventDefault();
    var bestmatch = "Kathryn";
    console.log(bestmatch);
    // $.post("/api/tables", newReservation, function(data) {
    //   console.log
    // })
    $(".modal-body").text(bestmatch);
    var mySelectVal = parseInt($("#mySelect").val());
    console.log(typeof (mySelectVal));
});
//});
