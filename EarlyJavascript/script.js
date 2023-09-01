console.log("helllooo");

let message = 'alert example';
alert(message);

// execerice from https://www.theodinproject.com/lessons/foundations-fundamentals-part-1 //

console.log(23+97);

console.log((4+6+9)/77);

let a = 10;
console.log(a);

console.log(9*a);

let b = 7*a;
console.log(b)


function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('goat'))

function add7(number) {
    return number + 7;
}

function multiply(a,b) {
    return a * b;
}

function capitalize(text) {
    return text.toUpperCase();
}

function lastLetter(text) {
    return text.charAt(text.length - 1)
}

console.log("7+7= "+ add7(7));
console.log("5x2= "+ multiply(5,2) );
console.log("allcaps of Turtle = "+ capitalize('Turtle'));
console.log("Last Letter of Turtle = "+ lastLetter('Turtle'));