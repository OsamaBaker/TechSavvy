var firstName = prompt("What is your name?")

var greeting = document.write('<h3>'+'Hello ' +firstName+ '</h3>')

var favouriteColor = prompt("What is your favourite color?");

function getFavouriteColor(favouriteColor){

    while(favouriteColor!=='red' && favouriteColor!=='blue') {
        favouriteColor = prompt('Please choose between red and blue');
    }
    
    if (favouriteColor == 'red'){
        document.write('<img src="images/red-box.webp">');
    } else if (favouriteColor == 'blue'){
        document.write('<img src="images/blue-box.png"/');
    } else {
        alert("Choose between blue and red");
    }

}

var getNumberOfBoxes = function () {

    var numberOfBoxes = prompt('how many boxes do you want?');
    
    var boxes = '';
    var result = '';
    
    if (favouriteColor == 'red') {
        boxes = '<img src="images/red-box.webp">';
    } else if (favouriteColor == 'blue') {
        boxes = '<img src="images/blue-box.png">';
    }
    
    for (var i = 0; i < numberOfBoxes; i++) {
        result += boxes;
    }
    
    document.write(result)

}

getNumberOfBoxes();

var getFavouritePet = function (){

    var favouritePet = prompt("What is your favourite pet?")
    
    if (favouritePet == 'cat'){
        document.write('<img src="images/cat.png"/');
    } else if(favouritePet == 'dog'){
        document.write('<img src="images/dog.jpg"/');
    } else{
        confirm("Choose between a cat or a dog, and refresh the page");
    }

}

getFavouritePet();