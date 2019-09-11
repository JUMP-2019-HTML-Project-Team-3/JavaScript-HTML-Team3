id="demo";
id="smiley";

function RecipeLink() {
    alert("Okay, here is the link!  Ready to receive it?");
    window.open('https://shokugekinosoma.fandom.com/wiki/Roast_Pork,_Just_Kidding');
}
// Function for configuration box, which leads to either alert box or altering source box text.
function RecipeConf() {
    var txt = "No link for you."; // Establish variable for Cancel
    var r = confirm("Warning: the following link contains anime.  Proceed?"); // establish confBox boolean

    if (r == true) {
        RecipeLink();
        document.getElementById("demo").innerHTML = "See source";
    }
    // Replaces entire document with txt - use getElementById instead of document.write!
    else document.getElementById("demo").innerHTML = txt;
}

function Movement() {
    var elem = document.getElementById("smiley");
    var pos = 0;
    var keyFrame = setInterval(Frame, 5);
    elem.style.position = "relative";
    function Frame() {
        if (pos == 1500) {
// Fix this to return to original position.
            pos -= 20;
            elem.style.right = pos + "px";
            if (pos == 0) clearInterval(keyFrame);
        }
        else {
            pos += 20;
            elem.style.left = pos + "px";
        }
    }
}
// https://www.w3schools.com/js/js_htmldom_animate.asp
