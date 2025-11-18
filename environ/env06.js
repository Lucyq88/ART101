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

function showImage(src, width, height, alt) {
    let img = document.createElement("img");
    img.id = "edu";
    img.src = src;
    img.width = width;
    img.height = height
    img.alt = alt;
    img.style.position = "absolute";
    img.style.zIndex = "9999";
    img.style.pointerEvents = "none";

    document.body.appendChild(img);
};
$("#button").one("click", function () {
    showImage("images/eduardo.png", 300, 200, "Help is here!");

    if ($("#edu").is(":visible")) {
        $(document).mousemove(function (event) {
            $("#edu").css({
                left: event.pageX - 60,
                top: event.pageY - 60
            });
        })
    }
});


$("#help").click(function () {
    const smoke = $("#smoke");
    smoke.fadeToggle(400, function () {
        if (smoke.is(":visible")) {
            function moveSmoke() {
                smoke.animate({ top: "70px", left: "200px", opacity: 0.9 }, 1500)
                    .animate({ top: "80px", left: "250px", opacity: 1 }, 1500, moveSmoke);
            }
            moveSmoke();
        } else {
            smoke.stop(true, true).animate({ top: "200px", left: "700px" }, 400);
        }
    });
});
