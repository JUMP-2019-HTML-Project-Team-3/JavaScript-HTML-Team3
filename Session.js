// Viewbag, User Check, Session tokens

function newLoad(){
    try{
        var stringCookie = document.cookie.split(";");

        sessionUser = stringCookie[0];
        sessionPass = stringCookie[1];
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
    
    //  onclick = function(event){
        // if(event.target == check){
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
                document.cookie += newUser.userName + ";" + newUser.password + ";";                
            }
        // }
    // }
}
