function Fruit_Function() {
    var Fruit_Output;
    var Fruit = document.getElementById("Fruit_Input").value;
    var Fruit_String = " has a great flavor!";
    switch(Fruit) {
        case "Strawberry":
            Fruit_Output = "Strawberry" + Fruit_String;
        break;
        case "Orange":
            Fruit_Output = "Orange" + Fruit_String;
        break;
        case "Banana":
            Fruit_Output = "Banana" + Fruit_String;
        break;
        case "Mango":
            Fruit_Output = "Mango" + Fruit_String;
        break;
        case "Peaches":
            Fruit_Output = "Peaches" + Fruit_String;
        break;
        default:
        Fruit_Output = "Please enter a fruit exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Fruit_Output;
}

function Mystery() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Kiwi";
}

var c = document.getElementById("FruityTooty");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,0, 450);
    grd.addColorStop(0, "orange");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect (0, 0, 600, 400);
    ctx.font = "25px Arial";
    ctx.strokeText("Fruit Tooty World", 200, 200);

