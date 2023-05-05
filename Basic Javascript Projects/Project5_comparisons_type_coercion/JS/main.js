//Testing console.log()
console.log(56 +12467);

console.log(73>100);

//Testing double equal signs 
document.write (4==4);

document.write("<br><br>");

document.write(4==18);

document.write("<br><br>");

//Testing triple equal signs 
C = 10;
D = 10;
E = "10";
F = "Guppies";
G = 17;
G = 28;
document.write(C === D);
document.write("<br><br>");

document.write(D === E);
document.write("<br><br>");

document.write(C === F);
document.write("<br><br>");

document.write(G === "G");
document.write("<br><br>");

//Testing logical operators
document.write(10 > 2 && 11 > 5);
document.write("<br><br>");

document.write(22 > 8 && 15 > 45);
document.write("<br><br>");

document.write(72 > 127 || 88 > 32);
document.write("<br><br>");

document.write(56 > 289 || 34 < 5);
document.write("<br><br>");


//Testing typeof operator and type coercion 
var H="Orange and Yellow Koi"
document.write(typeof H);

document.write("<br><br>There once were " + 7 + " Goldifsh in this pond")

document.write("<br><br>" + 5E310);

document.write ("<br><br>" + -10E310 + "<br><br>");

document.write( 4 < 11);

//Testing NaN
function Fish () {
    document.getElementById("Total").innerHTML = 0/0;
}

function Fish1 () {
    document.getElementById("True").innerHTML = isNaN('22')
}

function Fish2 () {
    document.getElementById("False").innerHTML = isNaN('13 frogs live in the pond')
}

//Testing not operator 
function Fish3 () {
    document.getElementById("Missing").innerHTML = !(17>10);
}

function Fish4 () {
    document.getElementById("Different").innerHTML = !(192<10);
}
