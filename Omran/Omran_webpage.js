id = "demo";

<button onclick="RecipeConf()">See source</button>

function RecipeLink() {
    alert("Okay, here is the link!  Ready to receive it?");
    if (alert == true) window.open('https://techwelkin.com/how-to-open-a-new-tab-on-click-of-a-button-html-javascript');
}
function RecipeConf() {
    var txt;
    var r = confirm("Warning: this webpage contains anime.  Proceed?");

    if (r == true) {
        RecipeLink();
    }
    else txt = "No link for you."
    // Replaces entire document with txt
    document.write(txt);
}
