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

function createCookie(cookieName,cookieValue,daysToExpire)
        {
          var date = new Date();
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
          document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
        }
function accessCookie(cookieName)
        {
          var name = cookieName + "=";
          var allCookieArray = document.cookie.split(';');
          for(var i=0; i<allCookieArray.length; i++)
          {
            var temp = allCookieArray[i].trim();
            if (temp.indexOf(name)==0)
            return temp.substring(name.length,temp.length);
       	  }
        	return "";
        }
function checkCookie()
        {
          var user = accessCookie("testCookie");
          if (user!="")
        	alert("Welcome Back " + user + "!!!");
          else
          {
            user = prompt("Please enter your name");
            num = prompt("How many days you want to store your name on your computer?");
            if (user!="" && user!=null)
            {
            createCookie("testCookie", user, num);
            }
          }
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