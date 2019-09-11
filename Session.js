// Viewbag, User Check, Session tokens

function newLoad(){
    try{
        var stringCookie = document.cookie.split(";");

        sessionUser = stringCookie[0];
        sessionPass = stringCookie[1];
        const sessionUser = sessionStorage.getItem("userName");
        if(sessionUser != ""){
            document.getElementById("displayName").innerHTML = "Welcome " + sessionUser;
        }
    }
    catch(err){}
}

function User(userName, password){
    this.userName = userName;
    this.password = password;
}

function setLinksIndex()
{
    var stringCookie = document.cookie.split(";");

    sessionUser = stringCookie[0];
    sessionPass = stringCookie[1];
    if (sessionUser != "") {
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
    var check = document.getElementById("sb1");
    var tryUser = document.getElementById("uID").value;
    var tryPass = document.getElementById("pID").value;
    var userList = document.cookie.split(";");
    var userCheck = "";

    for (let i = 0; i < userList.length; i+=2) {

        if (userList[i] == tryUser) {
            userCheck = array[i];
        }
    }
    if(userCheck != ""){
        if(testUser.password == tryPass){
            this.alert("Login Successful");
        }
        else{
            this.alert("Incorrect Password");
            }
    }
    else{
        var newUser = new User(tryUser, tryPass);
        this.alert("Login Successful: Welcome new user");
        sessionStorage.setItem("userName", tryUser);
        document.cookie = newUser.userName + ";" + newUser.password + ";";                
    }
}
