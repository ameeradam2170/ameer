var user=document.getElementById("user")
var pwd=document.getElementById("pwd")
var btn=document.getElementById("btn")

function validate(){
    if(user.value.trim()=="" || pwd.value==""){
        alert("Field cannot be empty");
        user.style.border="2px solid red"
         pwd.style.border="2px solid red"
        return false
    }
    else if (pwd.value.length<5){
        alert("password length should be more than 5")
        return false;
    }
    else{
        return true
    }
}