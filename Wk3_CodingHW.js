//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console. b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths). c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
//1a.
console.log("#1 part a");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
function ageSubtract() {
  for (i = 0; i < ages.length; i++) {
    console.log(ages[ages.length - 1] - ages[0]);
  }
}
ageSubtract();
//1b.
console.log("#1 part b");
ages.push(38);
ageSubtract();

//1c.
console.log("#1 part c, three different attempts and an answer check");
//First Attempt on my own
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

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console. b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//2a.

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log("#5");
//creates a new array with the lengths of each element in names array
let nameLengths = names.map(function (element) {
  return element.length;
});
console.log(nameLengths);
//adds up the values of nameLength array
console.log("#2 part a");
let totalLetters = nameLengths.reduce(function (previous, currentValue) {
  return previous + currentValue;
});
console.log(totalLetters / names.length);

//2b.
console.log("#6");
//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let letterSum = nameLengths.reduce(function (previous, currentValue) {
  return previous + currentValue;
});
console.log(letterSum);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
