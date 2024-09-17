/* CHALLENGE #6
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



 */ 
/* Write your code below. Good luck! 🙂 */

// Function to calculate the tip based on the bill value
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// Test the calcTip function with a bill value of 100
const testBill = 100;
const tip = calcTip(testBill);
console.log(`For a bill of $${testBill}, the tip is $${tip}.`);

// Array of bills (test data)
const bills = [125, 555, 44];

// Create the tips array by applying calcTip to each bill
const tips = bills.map(calcTip);

// Create the totals array by adding the bill and tip values
const totals = bills.map((bill, index) => bill + tips[index]);

// Output the results
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Totals: ", totals);
