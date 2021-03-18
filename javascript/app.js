var firstName = prompt("What is your name?")

var greeting = document.write('<h3>'+'Hello ' +firstName+ '</h3>')

var favouriteColor = prompt("What is your favourite color?");

if (favouriteColor == 'red'){
    document.write('<img src="images/red-box.webp">');
} else if (favouriteColor == 'blue'){
    document.write('<img src="images/blue-box.png"/');
} else {
    alert("Choose between blue and red");
}

var favouritePet = prompt("What is your favourite pet?")

if (favouritePet == 'cat'){
    document.write('<img src="images/cat.png"/');
} else if(favouritePet == 'dog'){
    document.write('<img src="images/dog.jpg"/');
} else{
    confirm("Choose between a cat or a dog, and refresh the page");

    window.location.reload();
}