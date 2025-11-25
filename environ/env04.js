//declaring an array with name theCharacters
let theCharacters = ["Renesmee", "Chuckesme", "Rasputin", "Rikitiki", "Sammy The Slug", "Tammy The Slug", "Edward"];

//declaring an object with the name theRakutin
let theRakutin = {
    skin: "the skin of a killer",
    age: "4 days old",
    canReadMinds: "Sorta"

};

//declaring an object with the name SammyTheSlug
let TheSlug = {
    color: ["yellow", "yellow, but brighter", "yellow but darker"],
    yearsAlive: ["1", "2", "3", "4", "5", "6", "7"],
    livesIn: "The Redwoods",
};

//describing the environment

let megaSentence;

megaSentence = "<p> " + theCharacters[1] + " has come into the redwoods with one intention, eating as many Banana Slugs as possible, she is only " + theRakutin.age + " but she is hunugry, and wants to free herself from the guilt of having " + theRakutin.skin + " </p>";

$("#output").html(megaSentence)

megaSentence = megaSentence + "<p> Deep into " + TheSlug.livesIn + " " + theCharacters[3] + " finds herself two Banana Slugs. The first one is " + TheSlug.yearsAlive[2] + " years old, with a " + TheSlug.color[2] + " skin. The second one, known as " + theCharacters[4] + " a beautiful " + TheSlug.yearsAlive[8] + " years old Slug, with a " + TheSlug.color[1] + " color. Both Slugs are ready to fight " + theCharacters[2] + " but who will win? </p>";

$("#slug").html(megaSentence);

let maxImages = 1;
let currentImages = 0;

function showImage(src, width, height, alt) {

    if (currentImages >= maxImages) {
        alert("Thats all the help you can get!");
        return;
    }

    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height
    img.alt = alt;

    document.body.appendChild(img);

    currentImages++; 
};
$("#button").click(function () {
    showImage("images/eduardo.png", 300, 200, "Help is here!");

});

