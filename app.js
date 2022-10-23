console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1: Guessing Game
let magicNumber = 22;

let guessNumber = prompt("What is the magic number?");

if (guessNumber == magicNumber) {
  console.log("Congrats! You guessed the magic number.");
} else if (guessNumber > magicNumber) {
  console.log("Guess was too high :/. Try Again.");
} else if (guessNumber < magicNumber) {
  conosle.log("Guess was too low :/. Try Again.")
}

//Exercise 2: 
let birthMonth = prompt("Please insert your birth month:");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
      console.log("Winter");
      break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Fall");
    default:
      console.log("Birth month not recognized...")
}

// Exercise 3:
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (typeId) {
  case "BL":
    type = "Black";
    break;
  case "BL":
    type = "Blue";
    break;
  case "RD":
    type = "Red";
    break;
  case "PU":
    type = "Purple";
    break;
  default:
    type = "White";
}


if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

switch (typeId) {
  case "S":
    type = "Small";
    break;
  case "M":
    type = "Medium";
    break;
  case "L":
    type = "Large";
    break;
  case "XL":
    type = "Extra Large";
    break;
  default:
    type = "One Size Fits All";
}



console.log(`Product: ${size} ${color} ${type}`);


let answer = 12;
let x = 4;
let y = 3;

if (x * y == answer) {
  console.log("If/Else: Correct")
} else {
  console.log("If/Else: Incorrect")
}

switch (true) {
  case typeof answer == "number":
    console.log("Correct input type...");
  case x * y == answer:
    console.log("Switch: Correct answer");
    break;
  default:
    console.log("Switch: Incorrect")
}