//Using a global variable to show how many thyme seeds sprouted
document.write("What do these numbers mean for the thyme seeds?<br>")

var Thyme = 25; 
function Germinated() {
    document.write((Thyme - 8) + "<br>");
}
function Gone_Bad() {
    document.write((Thyme - 17) + "<br>");
}
Germinated();
Gone_Bad();

//Using a local vaiable to show what basil was planted
document.write("What do these number mean for the basil seeds?<br>")

function SweetBasil() {
    var Basil = 50;
    document.write((Basil - 37) + "<br>");
}
function ItalianBasil() {
    var Basil = 50;
    document.write((Basil - 13) + "<br>");
}
SweetBasil();
ItalianBasil();

//Using a method to see when the seeds sprouted
function Sprout_Time () {
    if(new Date().getHours() <20) {
        document.getElementById("Sprout").innerHTML = "They aren't showing off yet";
    }
}

//Using an else statement to show which basil is the majority
function Majority () {
    var SBasil = 13;
    if (SBasil > 25) {
        document.write("Sweet Basil");
    } else {
        document.write("Italian Basil");
    }
    document.getElementsById("Basil_Type").innerHTML = document.write;
}

//Using an else statement to show how mane sage seeds were planted
function Takeover() {
    Amount = document.getElementById("Guess").value;
    if (Amount >= 45) {
        Answer = "That is correct!";
    }
    else {
        Answer = "That is incorrect!";
    }
    document.getElementById("More").innerHTML = Answer;
}

//Using if else statement to show the time
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is evening time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}



