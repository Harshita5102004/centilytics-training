// find the element of html by its id 
 document.getElementById("h1")

// find the element and add in the html " hello world"
document.getElementById("hello").innerHTML = "hello world";

// find element by class name 
document.getElementsByClassName("div")


let head= document.getElementsByTagName("h2");
console.log(head);

function changeText() {
    document.getElementById("heading").innerHTML = "DOM Manipulated!";
}


function call(){
    console.log("hello");
}

call();