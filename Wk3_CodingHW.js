//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console. b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths). c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
//1a.
console.log("#1 part a");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
function ageSubtract() {
  for (i = 0; i < ages.length; i++) {}
  console.log(`1a Subtraction solution: ${ages[ages.length - 1] - ages[0]}`);
}
ageSubtract();
//1b.
console.log("#1 part b");
ages.push(38);
ageSubtract();

//1c.
console.log("#1 part c, three different attempts and an answer check");
//First Attempt
let sum = 0;
for (i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log(sum / ages.length);

//Second Attempt from notes
let sum1 = ages.reduce(function (previous, currentValue) {
  return previous + currentValue;
});
console.log(sum1 / ages.length);

//Third Attempt rewriting stuff
function agesSum(previous, currentValue) {
  return previous + currentValue;
}
console.log(ages.reduce(agesSum) / ages.length);

//check my answer:
let add = 3 + 9 + 23 + 64 + 2 + 8 + 28 + 93 + 38;
let myAverage = add / 9;
console.log(myAverage);
//////////////////////////////////////////////////////////
//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console. b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2a. and //5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log("#5");
//creates a new array with the lengths of each element in names array
let nameLengths = names.map(function (element) {
  return element.length;
});
console.log(nameLengths);
//////////////////////////////////////////////////////////
console.log("#2 part a");
let totalLetters = nameLengths.reduce(function (previous, currentValue) {
  return previous + currentValue;
});
console.log(totalLetters / names.length);
//2b.
console.log("#2 part b");
let printArray = "";
for (let i = 0; i < names.length; i++) {
  printArray = printArray.concat(names[i]);
  if (i < names.length - 1) {
    printArray = printArray.concat(" ");
  }
}
console.log(printArray);
//////////////////////////////////////////////////////////
console.log("#3");
//3. How do you access the last element of any array?
console.log(names[names.length - 1]);
//////////////////////////////////////////////////////////
console.log("#4");
//4.	How do you access the first element of any array?
console.log(names[0]);
//////////////////////////////////////////////////////////
console.log("#6");
//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let letterSum = nameLengths.reduce(function (previous, currentValue) {
  return previous + currentValue;
});
console.log(letterSum);
//////////////////////////////////////////////////////////
console.log("#7");
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
let string = "";
function myMessage(word, n) {
  for (let i = 0; i < n; i++) {
    string += word;
  }
  console.log(string); //make sure to console.log out of the loop
}
myMessage("hello", 3);

//////////////////////////////////////////////////////////
console.log("#8");
//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
fullName("Jane", "Smith");
////////////////////////////////////////////////////////////
console.log("#9");
//Arrays created to test #9-#11:
let array1 = [5, 10, 15, 20, 25, 30]; //total sum equals 105, average is 17.5
let array2 = [1, 3, 4, 6, 7]; // average equals 4.2
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreater(array) {
  let sum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  if (sum > 100) {
    console.log(true);
  } else {
    console.log(false);
  }
}
//Test values:
sumGreater(array1); //Returns true
sumGreater(array2); //Returns false
//////////////////////////////////////////////////////////
console.log("#10");
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(array) {
  let arrTotalSum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  console.log(arrTotalSum / array.length);
}
average(array1);
average(array2);
//////////////////////////////////////////////////////////
console.log("#11");
//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function greaterAverage(arr1, arr2) {
  let sumArray1 = arr1.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  let sumArray2 = arr2.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  if (sumArray1 / arr1.length > sumArray2 / arr2.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
greaterAverage(array1, array2); //returns true because 17.5 > 4.5
greaterAverage(array2, array1); //returns false, 4.5 is not greater than 17.5
//////////////////////////////////////////////////////////
console.log("#12");
//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === true && moneyInPocket > 10.5) {
    return true;
  }
  return false;
}
console.log(willBuyDrink(true, 19));
console.log(willBuyDrink(false, 11));
console.log(willBuyDrink(true, 9));
//////////////////////////////////////////////////////////
console.log("#13");
//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log("My problem A.");
//A function that takes in the diameter as a parameter and can calculate the volume of a sphere rounded to the nearest tenth. This is a volume calculator. It should print the volume of a sphere with any size diameter. I created this function because I am using what I know and as a math teacher I know geometry. I figured I could create a calculator for two specific math concepts.

function volume(diameter) {
  if (diameter >= 0) {
    let radius = diameter / 2; //converts the diameter into the radius
    let volSphere = (4 * Math.PI * radius ** 3) / 3; //formula for the volume of sphere
    console.log(volSphere.toFixed(1)); //uses the result from volume variable and rounds to nearest tenth
  } else {
    console.log(undefined); //the diameter has to be a number that is a positive integer (or zero)
  }
}
//Test values:
volume(6);
volume(2);
volume(0);
volume(-10); //prints undefined
volume("five"); //prints undefined

console.log("My problem B.");
//A function that determines if three given length measures can create a triangle. The parameters are side1, side2, side3. The function will print true if the side lengths can form a triangle, and false if they can't.
// In order for a triangle to exist, the lengths have to be long enough to reach each other at the vertices. In order for this to work, the shorter two side lengths together have to be longer than the longest side. This function makes sure that any two side lengths are compared against each other and are in fact longer than the remaining side. I created this function because I am using what I know and I know geometry. I figured I could create a calculator for two specific math concepts.

function triangle(side1, side2, side3) {
  if (side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
//Test values:
triangle(5, 3, 4); //true
triangle(2, 5, 3); //false becuase 2+3 is not greather than 5
triangle(6, 1, 8); //false becuase 6+1 is not greather than 8
console.log("Example:");

let namesArray1 = ["Kelly", "Sam", "Kate"];
let nameLengths1 = namesArray1.map(function (element) {
  return element.length;
});
console.log(nameLengths1);
