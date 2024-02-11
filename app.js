
function myfunction3(){
let text1 = document.getElementById('function').innerHTML;
document.getElementById('function').innerHTML = text1.replace("italy","spain");
 }

 function horizontal(){
  let horizontal = document.getElementById("horizontal").innerHTML;
  document.getElementById('horizontal').innerHTML = 
  horizontal.replace(/italy/g,"spain");
 } 
 const numbers = ["1","2","3"];

 document.getElementById('nr').innerHTML = 
 "this is a number" +" "+ numbers.findIndex(Function);
 function Function(value,index,array){
    return value > 2 ;
 }
 const points = [40, 100, 1, 5, 25, 10];
 document.getElementById("z").innerHTML = points;
 
 points.sort(function(a, b){return b - a});
 document.getElementById("z1").innerHTML = points;

 const number1 = [12,21,32,14,5,67,876,4321];
 document.getElementById('gg').innerHTML =
 number1;

 function function1(){
   number1.sort();
   document.getElementById('gg').innerHTML = number1;
 }
function function2(){
   number1.sort(function(){return 0.5 - Math.random()})
   document.getElementById('gg').innerHTML = number1;
}
function function3(){
   number1.sort(function(a,b){return a - b})
   document.getElementById('gg').innerHTML = number1;
}
const cars = [
   {type:"volswagen",year:2009},
   {type:"audi",year:2010},
   {type:"skoda",year:2015}
];
cars.sort(function(a,b){return a.year - b.year});
displaycars();

function displaycars(){
   document.getElementById('f').innerHTML =
   cars[0].type + " " + cars[0].year + "<br>" +
   cars[1].type + " " + cars[1].year + "<br>" +
   cars[2].type + " " + cars[2].year;
}

const nrs = [10,34,53,2,12,1];
const nrs1 = nrs.reduce(okok);
document.getElementById('okok').innerHTML = nrs1;
function okok(value,total){
return total + value;
}

const date = new Date();
document.getElementById('date').innerHTML = date;
document.getElementById('math').innerHTML = "<p><b>Math.E:</b> " + Math.E + "</p>" +
"<p><b>Math.PI:</b> " + Math.PI + "</p>" +
"<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
"<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
"<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
"<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
"<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
"<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";

document.getElementById('mathfloor').innerHTML =
Math.floor(Math.random()*8) + 10;

function randomnumber(min,max) {
   return Math.floor(Math.random() * (min + max) + 1);
}
let x = 5;
let y = 10;
document.getElementById('zx').innerHTML =
(x==5||y==9);

function inputfunction(){
   let age = document.getElementById('input').value;
let vote = (age > 18) ? "old enough":"too young";
document.getElementById('inputing').innerHTML = vote;
}
let name = null;
let name1 = "missing";
let resultt = name ?? name1;
document.getElementById('l').innerHTML = "name is" + " " + resultt;

if (new Date().getHours() < 15){
   document.getElementById('hours').innerHTML = "good night";
}
else {
   document.getElementById('hours').innerHTML = "good evening";
}


const hours = new Date().getHours();
let greetings;

if (hours < 15){
   greetings = "good morning";
}
else if(hours < 20){
   greetings = "good evening";
}
else {
   greetings = "good night";
}
document.getElementById('greeting').innerHTML = greetings;

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("weekday").innerHTML = "Today is " + day;