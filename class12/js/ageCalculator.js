/*
document.getElementById("text").innerHTML
="Javascript lesson";

document.write("project code");
*/

var currentYear = prompt("What year are we on");

var birthYear = prompt("Enter the year the person was born.");

var yearsOld = currentYear - birthYear;

console.log(yearsOld);

document.getElementById("text").innerHTML = "If the person was born in " + birthYear + ", that person is " + yearsOld + " years old"; 