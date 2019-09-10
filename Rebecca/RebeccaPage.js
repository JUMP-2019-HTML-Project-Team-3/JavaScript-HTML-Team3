document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
	var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Georgia";
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "mediumturquoise");
    gradient.addColorStop("0.5", "fuchsia");
    gradient.addColorStop("1.0", "indigo");

    ctx.strokeStyle = gradient;
    ctx.strokeText("Salki's Noms",10,50);
}
