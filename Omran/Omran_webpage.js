id="demo";

function RecipeLink() {
    alert("Okay, here is the link!  Ready to receive it?");
    window.open('https://shokugekinosoma.fandom.com/wiki/Roast_Pork,_Just_Kidding');
}
function RecipeConf() {
    var txt = "No link for you.";
    var r = confirm("Warning: the following link contains anime.  Proceed?");

    if (r == true) {
        RecipeLink();
        document.getElementById("demo").innerHTML = "See source";
    }
    else document.getElementById("demo").innerHTML = txt;
    // Replaces entire document with txt - use getElementById instead of document.write!
}
