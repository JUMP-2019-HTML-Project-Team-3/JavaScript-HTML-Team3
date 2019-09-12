// Viewbag, User Check, Session tokens

function User(userName, password){
    this.userName = userName;
    this.password = password;
}

function setLinksIndex()
{
    //var stringCookie = document.cookie.split(";");
    var sessionUser = sessionStorage.getItem("user");
    var sessionPass = sessionStorage.getItem("password");   
    //sessionUser = stringCookie[0];
    //sessionPass = stringCookie[1];
    if (sessionUser != null) {
        var newButton = document.getElementById("log");
        newButton.className ="logout show";
        newButton.innerHTML = "Logout";
        // newButton.setAttribute("onclick","");
        // newButton.setAttribute("href", "#");
        newButton.onclick=logout;
        //document.getElementById("log").removeEventListener(onclick);
        
        var parameters = location.search.split("?");
        if(parameters != null){
            document.getElementById("displayName").innerHTML = "Welcome" + "&emsp;" + sessionUser;
            
            var join = "../Index/Index.html?" + sessionUser;
            document.getElementById("indexPage").href = join;
        
            var join = "../greg/greg.html?" + sessionUser;
            document.getElementById("gregPage").href = join;
        
            var join = "../Omran/Omran_webpage.html?" + sessionUser;
            document.getElementById("omranPage").href = join;
        
            var join = "../Rebecca/RebeccaPage.html?" + sessionUser;
            document.getElementById("rebeccaPage").href = join;
        }
    }
}

function setLinksOthers()
{
    var parameters = location.search.split("?");

    if(parameters[1] != undefined){
        document.getElementById("displayName").innerHTML = "Logged in as:" + "&emsp;"+ parameters[1];
        
        var join = "../Index/Index.html?" + parameters[1];
        document.getElementById("indexPage").href = join;

        var join = "../greg/greg.html?" + parameters[1];
        document.getElementById("gregPage").href = join;

        var join = "../Omran/Omran_webpage.html?" + parameters[1];
        document.getElementById("omranPage").href = join;

        var join = "../Rebecca/RebeccaPage.html?" + parameters[1];
        document.getElementById("rebeccaPage").href = join;
    }
}

function checkUser(){
    document.getElementById("sb1");
    var tryUser = document.getElementById("uID").value;
    var tryPass = document.getElementById("pID").value;
    //var userList = document.cookie.split(";");
    
    //var newUser = new User(tryUser, tryPass);
    this.alert("Login Successful: Welcome new user");
    sessionStorage.setItem("user", tryUser);
    sessionStorage.setItem("password", tryPass);
    //document.cookie = newUser.userName + ";" + newUser.password + ";";                
    
}

function logout(){

    sure = confirm("Are you sure you want to logout?");
    if(sure){
        sessionStorage.clear();
        location.reload();
    }
    else{
        return;
    }
}