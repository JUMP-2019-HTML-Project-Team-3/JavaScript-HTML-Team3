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

function moreInfo() {
  var txt;
  var more = prompt("Anything else you'd like to tell us? Here's your chance!");
  if (more == null || more == "" || more == "no") {
    txt = "Thank you for the basic review! Keeping it simple is okay!";
  } else {
    txt = "Thank you for giving more details!";
  }
  document.getElementById("more").innerHTML = txt;
  
  var name = document.getElementById("review").elements[0].value;
  var item;
  if (document.getElementById("review").elements[1].checked) {
	  item = "Cat Cookies"
  } else if (document.getElementById("review").elements[2].checked) {
	  item = "Rainbow Waffles"
  } else if (document.getElementById("review").elements[3].checked) {
	  item = "Mini Breakfast"
  } else if (document.getElementById("review").elements[4].checked) {
	  item = "Bear Sundae"
  } else {
	  item = "Pusheen Macarons"
  }
  var rating = document.getElementById("review").elements[6].value;

  alert("The form was submitted! Thank you " + name + " for giving " + item + " a rating of " + rating + "!");
}

/* 
  function submitMessage() {
  //var message = document.getElementsByName('nickname') + ' ' +;
  document.getElementById("form1").onsubmit = post;
  alert("The form was submitted with " + document.getElementsByName("nickname") +;
}

*/