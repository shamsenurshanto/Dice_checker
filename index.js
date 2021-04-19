var randomnum =  Math.floor(Math.random()*6)+1;
console.log(randomnum);
var img = "images/dice"+randomnum+".png";
console.log(img);

/// image 2 
var randomnum1 =  Math.floor(Math.random()*6)+1;
console.log(randomnum1);
var img1 = "images/dice"+randomnum1+".png";
console.log(img1);
document.querySelectorAll("img")[0].setAttribute("src",img);
document.querySelectorAll("img")[1].setAttribute("src",img1);
if(randomnum>randomnum1)
{
    document.querySelector("h1").innerHTML="<em>Player 1 is the winner ✔ </em>";

}
else if (randomnum1>randomnum)
{
    document.querySelector("h1").innerHTML="<em>Player 2 is the winner ✔ </em>";
   

}
else{
    document.querySelector("h1").innerHTML="<em>It is draw </em>";
}

