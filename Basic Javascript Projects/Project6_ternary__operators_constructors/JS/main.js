function Ride_Function () {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Testing reserved keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//Testing my own reserved keyword
function Cat(Breed, Sex, Age, Color) {
    this.Cat_Breed = Breed;
    this.Cat_Sex = Sex;
    this.Cat_Age = Age;
    this.Cat_Color = Color;
}

var Petunia = new Cat("Domestic Short Hair", "Female", 1, "Orange");
var Moustache = new Cat("Manx", "Male", 1, "Brown and Gray");
var ZZTop = new Cat("Main Coon", "Male", 9, "Blonde");
function PLCat () {
    document.getElementById("New_and_This").innerHTML = "One of the cats in Paul and Lucy's house is a " + ZZTop.Cat_Color + " " + ZZTop.Cat_Breed + ". The cat is a " + ZZTop.Cat_Age + "-year-old " + ZZTop.Cat_Sex + ".";
}

//Testing a Nested Function
function grow_Function () {
    document.getElementById("Nested_Function").innerHTML = MainCoon ();
    function MainCoon () {
        var Paul = 10;
        function Plus_fifteen () {Paul += 15;} 
        Plus_fifteen ();
        return Paul; 
    }
}
