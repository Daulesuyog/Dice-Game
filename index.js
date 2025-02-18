var randomnumber1 = Math.random();
var randomnumber1=Math.floor(Math.random()*6 +1);
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomimage="images/" + randomdiceimage
//  var randomimage="dice1.png" + randomdiceimage;
//  var randomimage="dice2.png" + randomdiceimage;
//  var randomimage="dice3.png" + randomdiceimage;
//  var randomimage="dice4.png" + randomdiceimage;
//  var randomimage="dice5.png" + randomdiceimage;
// // console.log(randomimage);
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" ,randomimage);


var randomnumber2 = Math.random();
var randomnumber2=Math.floor(Math.random()*6 +1);
  var randomimage2 = "images/dice" + randomnumber2 +".png";
//  var randomimage2="dice1.png" + randomdiceimage;
//  var randomimage2="dice2.png" + randomdiceimage;
//  var randomimage2="dice3.png" + randomdiceimage;
//  var randomimage2="dice4.png" + randomdiceimage;
//  var randomimage2="dice5.png" + randomdiceimage;
// console.log(randomimage);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src" ,randomimage2);


if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="WOw Player 1 Won! ";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="Wow Player 2 Won!";
}
else{
    document.querySelector("h1").innerHTML="OFFF Draw!"
}
