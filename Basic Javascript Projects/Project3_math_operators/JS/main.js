function CatN() { //Showing how many cats are in the home
    var PLCats = 75 + 75;
    document.getElementById("Math").innerHTML = PLCats;
}

function CatC() { //Showing how many cats are black
    var Color =  150 - 92;
    document.getElementById("Sub").innerHTML = Color;
}

function CatF() { //Showing how many bags are needed to feed all cats for one meal
    var Bags =  150 / 15;
    document.getElementById("Div").innerHTML = Bags;
}

function CatB() { //Showing how many kittens were birthed
    var Kittens =  6 * 3;
    document.getElementById("Mult").innerHTML = Kittens;
}

function CatN2() { //Showing how many non-black kittens were birthed
    var PLNCats =  (6 * 3) - 12;
    document.getElementById("MO").innerHTML = PLNCats;
}

function CatM() { //Showing how many times the bowls need to be filled
    var Bowl =  168 % 5;
    document.getElementById("ModOp").innerHTML = Bowl;
}

function Money() { //Showing how much money Paul and Lucy will have left
    var Amount = 25;
    document.getElementById("UO").innerHTML = -Amount;
}

 //Showing how many feral cats sneaked into the cat colony
var K=168;
K++;
document.write("<p>How many feral cats snuck into their home?</p>" + K);

 //Showing how many bowls went missing
var B=6;
B--;
document.write("<p>How many bowls do they have now?</p>" + B);

window.alert(Math.random() * 150); //Testing the Math.random function. Does not relate to cats.

function CatW() { //Showing how many white cats are at the home
    var H = Math.sqrt(81);
    document.getElementById("White").innerHTML = H;
}




