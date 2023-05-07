//Testing concat() to show mystery menu item
function Food() {
    var item_1 = "BBQ Tempeh, ";
    var item_2 = "Corn, ";
    var item_3 = "Cornbread ";
    var item_4 = "Beyond Sausage, ";
    var item_5 = "Baked Beans";
    var all_items = item_1.concat(item_2, item_3, item_4, item_5) + ". You get all items!";
    document.getElementById("Combo_Plate").innerHTML = all_items;
}

//Using slice() to show the mystery dessert
function slice_Method() {
    var sentence = "You get a free slice of pie too!";
    var section = sentence.slice(24,27);
    document.getElementById("Slice").innerHTML = section;
}

//Using number method to show the ticket number needed for pick up
function string_Method() {
    var x = 677;
    document.getElementById("Ticket_Number").innerHTML = x.toString();
}

//Using toprecision() to show the total cost of the order
function precision_Method() {
    var X = 25.38992284737238929;
    document.getElementById("Total").innerHTML = X.toPrecision(4);
}