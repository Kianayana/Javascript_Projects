function my_Dictionary () { //A dictionary showing the characteristics of a dog
    var Animal = {
        Species:"Dog",
        Color:"Blonde",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Color;
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}