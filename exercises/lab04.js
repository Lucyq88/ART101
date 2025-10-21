//declaring an array wiith name myCommutes
let myCommutes = ["Santa Cruz Metro", "Loop Buses", "walking", "my own personal set of wings"];

//declaring an object with name myFavoriteCommute
let myFavoriteCommute = {
    type: "Santa Cruz Metro",
    route: "3A",
    print: ["Sea Otters", "The Redwoods"],
    goesNearTheBeach: "YES!!!!",
};

let megaSentence;

megaSentence = "<p>The commutes I use the most from the array are: " + myCommutes[0] + ", " + myCommutes[3] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute of all time is the " + myFavoriteCommute.type + ", route number " + myFavoriteCommute.route + ", especially when it has my favorite print which is " + myFavoriteCommute.print[1] + "</p>";

$("#output").html(megaSentence);
