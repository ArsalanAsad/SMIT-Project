var matriculation = prompt("enter your matriculation percentage");
var entrytest = prompt("Enter your entrytest percentage");

var num1 = +matriculation;
var num2 = +entrytest;

var average = (num1 + num2) / 2;
console.log(average);

if (average < 70) { 
    alert("you are not eligible"); 
} else {
    alert("you are eligible");
}