var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var result;


document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice" + randomNumber1 +".png");

document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + randomNumber2 +".png");


if (randomNumber1 === randomNumber2)
{
    result = "Draw!";
}
else if (randomNumber1 > randomNumber2)
{
    result = "🚩Player 1 Wins!"
}
else 
{
    result = "Player 2 Wins!🚩"
}

document.querySelector("h1").innerText = result;

