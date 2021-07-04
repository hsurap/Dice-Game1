var no=Math.floor(Math.random()*6)+1;
var no1=Math.floor(Math.random()*6)+1;
// console.log(no);
var left="images/dice" + no + ".png";
var right="images/dice" + no1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", left);
document.querySelectorAll("img")[1].setAttribute("src", right);

if(no>no1)
{
  document.querySelector("h1").innerHTML="player1 wins";
}
else if(no===no1)
{
  document.querySelector("h1").innerHTML="Draw";
}
else{
  document.querySelector("h1").innerHTML="player2 wins";
}
