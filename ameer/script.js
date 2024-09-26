var hd = document.getElementById("head1");
hd.style.color="Blue";
hd.innerText="text changed";
hd.innerHTML="<p>changed into p tag</p>"
// using class name
var list =document.getElementsByClassName("list");
for(let i=0;i<list.length;i++)
{
list[i].style.color="red"
}
//using tag name
var tag1 = document.getElementsByTagName("li")
tag1[1].style.backgroundColor="yellow";

// using query selector
var inp= document.querySelector("input");
inp.value= "Enter your name"
// query selecter using class name
var qclass =document.querySelector(".qclass");
qclass.style.backgroundColor="green"

// query selector using id
var btn = document.querySelector("#qid");
btn. innerText="sumbit"
qid.style.backgroundColor=("grey")