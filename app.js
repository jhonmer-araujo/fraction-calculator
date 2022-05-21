/**
* This command-line program take operations on fractions as an input and produce a fractional result.
* @author   Jhonmer Araujo
* @param    {String} x          First argument. Improper fractions and / or whole numbers.
* @param    {String} operator   Second argument Operators to use (*, /, +, -)
* @param    {String} y          Third argument. Improper fractions and / or whole numbers.
* @return   {String}            Fraction result
* @note Command line shell interpret * as all files of the path. For multiply, please use quotation for that argument. e.g. "*"
* @example node app.js 1/2 + 1/2
* 1/1
* @example node app.js 2_3/8 / 9/8
* 2_1/9
*/

const functions = require('./functions');

// Get command line arguments
const args = process.argv.slice(2)

// Get operator and operands
const x = args[0]
const y = args[2]
const operator = args[1];

// Check if operator is valid
if (!['*','-','/','+'].includes(operator)){
    console.log("Invalid operator")
    process.exit(1);
}

// Call function to calculate
if (operator == '+' || operator == '-'){
    console.log(functions.addSubtract(x, y, operator));
} else if (operator == '*' || operator == '/'){
    console.log(functions.multiplyDivide(x, y, operator));
} else {
    console.log("Invalid operator")
    process.exit(1);
}