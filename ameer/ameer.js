var email=document.getElementById("email");
var pwt = document.getElementById("btn");
var err1 = document.getElementById("err1");
 function check(){
    let regexp =/^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        err1.innerText="Email is valid"
        err1.style.color="green"
        return true;
    }else{
         err1.innerText="Email is invalid"
        err1.style.color="red"
        return false;
        

    }
 }

