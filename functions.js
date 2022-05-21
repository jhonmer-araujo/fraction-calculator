/**
* Function that add and substract 2 fractions
* @author   Jhonmer Araujo
* @param    {String} x          First fraction
* @param    {String} y          Second fraction
* @param    {String} operator   Operator to use
* @return   {String}            Fraction result
*/
exports.addSubtract = function (x, y, operator) {
    
    // Check if x or y is a whole number or a mixed, proper or improper fraction
    if (checkFraction(x) == "mixed") {
        x = (mixedToFraction(x));
    } else if (checkFraction(x) == "whole") {
        x = x + "/1";
    }

    if (checkFraction(y) == "mixed") {
        y = (mixedToFraction(y));
    } else if (checkFraction(y) == "whole") {
        y = y + "/1";
    }
    
    // Split values
    var xFraction = x.split("/");
    var yFraction = y.split("/");

    // Add or substract fractions applying the formula
    var numeratorA = (Number(xFraction[0]) * Number(yFraction[1]));
    var numeratorB = (Number(yFraction[0]) * Number(xFraction[1]));

    if (operator == "+") {
        numerator = numeratorA + numeratorB
    } else if (operator == "-") {
        numerator = numeratorA - numeratorB
    } else {
        return "ERROR: Operator not valid";
    }

    var denominator = Number(xFraction[1]) * Number(yFraction[1]);

    // Minimize fraction using Greatest Common Divisor
    var fraction = (numerator / GCD(numerator,denominator)) + "/" + (denominator / GCD(numerator,denominator))
    
    return fractionToMixed(fraction);
};

/**
* Function that multiply and divide 2 fractions
* @author   Jhonmer Araujo
* @param    {String} x          First fraction
* @param    {String} y          Second fraction
* @param    {String} operator   Operator to use
* @return   {String}            Fraction result
*/
exports.multiplyDivide = function (x, y, operator) {

    if (y === 0 && operator == "/") {
       console.log("ERROR: Trying division by zero");
    }

    var numerator, denominator = 0;
    var fraction = '';

    // Check if x or y is a whole number or a mixed, proper or improper fraction
    if (checkFraction(x) == "mixed") {
        x = (mixedToFraction(x));
    } else if (checkFraction(x) == "whole") {
        x = x + "/1";
    }

    if (checkFraction(y) == "mixed") {
        y = (mixedToFraction(y));
    } else if (checkFraction(y) == "whole") {
        y = y + "/1";
    }

    // Split values
    var xFraction = x.split("/");
    var yFraction = y.split("/");

    // Multiply or divide fractions applying the formula
    if (operator == "*") {
        numerator = Number(xFraction[0]) * Number(yFraction[0]);
        denominator = Number(xFraction[1]) * Number(yFraction[1]);
        fraction = numerator + "/" + denominator;
    } else if (operator == "/") {
            numerator = Number(xFraction[0]) * Number(yFraction[1]);
            denominator = Number(xFraction[1]) * Number(yFraction[0]);

            // Minimize fraction using Greatest Common Divisor
            fraction = (numerator / GCD(numerator,denominator)) + "/" + (denominator / GCD(numerator,denominator));
    } else {
        return "ERROR: Operator not valid";
    }

    return fractionToMixed(fraction);
};

/**
* Function that check if a fraction is a mixed, proper or improper
* @author   Jhonmer Araujo
* @param    {String} fraction   Fraction to check
* @return   {String}            Message result
*/
function checkFraction(fraction) {
    if (fraction.includes('_')) {
        const num = fraction.split("_");
        return "mixed";
    } else if (fraction.includes('/')) {
        const num = fraction.split("/");
        return Math.abs(num[0] / num[1]) < 1 ? "proper": "improper";
    } else {
        return "whole";
    }
}

/**
* Function that convert a mixed fraction to proper or improper
* @author   Jhonmer Araujo
* @param    {String} mixed      Fraction to convert
* @return   {String}            Fraction result
*/
function mixedToFraction(mixed) {
    // Split values
    var mixedFraction = mixed.split("_");
    var whole = mixedFraction[0];
    var numerator = mixedFraction[1].split("/")[0];
    var denominator = mixedFraction[1].split("/")[1];

    // Multiply denominator by whole number
    var stepOne = denominator * whole;

    // Add answer from Step 1 to the numerator
    var stepTwo = Number(stepOne) + Number(numerator);

    // Return result from Step 2 over the denominator
    return stepTwo + "/" + denominator;

}

/**
* Function that convert a proper o improper fraction to mixed
* @author   Jhonmer Araujo
* @param    {String} fraction   Fraction to convert
* @return   {String}            Fraction result
*/
function fractionToMixed(fraction) {
    // Split values
    var fraction = fraction.split("/");

    // Get the elements
    var whole = Math.floor(fraction[0] / fraction[1]);
    var numerator = fraction[0] % fraction[1];
    var denominator = fraction[1];

    if (whole === 0) {
        return numerator + "/" + denominator;
    } else {
        return whole + "_" + numerator + "/" + denominator;
    }
}

/**
* Function that calculate Greatest Common Divisor of 2 numbers
* @author   Jhonmer Araujo
* @param    {String} x    First number
* @param    {String} y    Second number
* @return   {String}      Common factor
*/
function GCD(x,y) {
    var gcd = 1;
    // Iterate to find the factors of the numbers
    for (var i = 2; i <= x && i <= y; i++) {
        if (x % i == 0 && y % i == 0) {
            gcd = i;
        }
    }
    return gcd;
}