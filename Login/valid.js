function validate()
{
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    if(username=="admin" && password=="user69"){
        alert("login successfull");
        return false;
    }
    else{
        alert("login failed");
        return false;
    }
}