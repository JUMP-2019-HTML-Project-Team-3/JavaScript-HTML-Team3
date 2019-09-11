// Viewbag, User Check, Session tokens
var users = [];

var Viewbag = {
    user : null,
    SessionID : 0,

    constructor(User){
        this.SessionID = Math.floor(Math.random() * 1000) + 1;
        this.user = User;
    }
}

var User = {
    userName : "",
    password : "",

    constructor(userName, password){
        this.userName = userName;
        this.password = password;

        if(!users.includes(this.userName)){
            users.push(this);
        }
        else{
            return alert("User name is taken")
        }
    }
}

function checkUser(){
    var check = document.getElementById("sb1");
    var tryUser = document.getElementById("uID").value;
    var tryPass = document.getElementById("pID").value;
    var testUser = users.find(tryUser);
    
    return onclick = function(event){
        if(event.target == check){
            if(testUser){
                if(testUser.password == tryPass){
                    alert("Login Successful");
                    return new Viewbag(userName);
                }
                else{
                    return alert("Incorrect Password");
                    }
            }
            else{
                return new User(userName, password);
            }
        }
    }
}