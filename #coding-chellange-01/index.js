/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

3. Log the value of BMIMark and BMIJohn to the console.

4. BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too */

/* Write your code below. Good luck! 🙂 */

/* TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. */

console.log("\n");


const markMass = 78;
const markheight = 1.69;

const johnMass = 92;
const johnheight = 1.95;

const BMIMark = markMass / (markheight * markheight);
const BMIJhon = johnMass / (johnheight * johnheight);
const markHeigherBMI = BMIMark > BMIJhon;

console.log(BMIMark + "\n" + BMIJhon + "\n" + markHeigherBMI + "\n");

/* TEST DATA 2: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. */

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const AvgBMIMark = markWeight / (markHeight * markHeight);
const AvgBMIJhon = johnWeight / (johnHeight * johnHeight);
const totalMarkHeigherBMI = BMIMark > BMIJhon;

console.log(AvgBMIMark + "\n" + AvgBMIJhon + "\n" + totalMarkHeigherBMI);

console.log("\n");