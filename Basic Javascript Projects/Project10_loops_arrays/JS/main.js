//Tesing a while Loop
function Call_Loop() {
    var time = ""
    var PR = 11
    while (PR < 15) {
        time += "<br>" + PR;
        PR++;
    }
    document.getElementById("Loop").innerHTML = time;

}

//Testing a for Loop
var Instruments = ["Guitar", "Drums", "Piano", "Sass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Testing arrays
function array_Function() {
    var GreenV = [];
    GreenV [0] = "Broccoli";
    GreenV [1] = "Kale";
    GreenV [2] = "Spinach";
    document.getElementById("Array").innerHTML = "One of the green veggies we have in the fridge is " + GreenV[1] + ".";

}

//Practicing with const keyword 
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black", age:"3-year-old"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    Musical_Instrument.age = "2-year-old";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.age + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Testing the use of let
var X = 82; 
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//Testing the use of an object
function CC() {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    }
    document.getElementById("Car_Object").innerHTML = car.description();
}