let number = document.getElementById("count-el");
let title = document.createElement("h1");
title.innerHTML = "Counter App";
document.body.insertBefore(title, document.body.getElementsByTagName("h1")[0]);
let count = 0;

function increment() 
{
    count++;
    number.innerHTML = count;
}

let entry = document.createElement("p");
entry.innerHTML = "Previous entries: ";
document.body.appendChild(entry);
function save() 
{
    entry.innerHTML = entry.innerHTML + count + " - ";
}