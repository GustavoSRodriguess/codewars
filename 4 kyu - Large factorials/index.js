// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

// NOTES:

// The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

// I have removed the use of require in the javascript language.

function factorial(n) {
    if (n === 0 || n === 1) return "1";

    let result = "1";
    for (let i = 2; i <= n; i++) {
        result = multiply(result, i.toString());
    }

    return result;
}

function multiply(a, b) {
    let product = [];
    for (let i = 0; i < a.length + b.length; i++) {
        product[i] = 0;
    }

    for (let i = a.length - 1; i >= 0; i--) {
        let carry = 0;
        for (let j = b.length - 1; j >= 0; j--) {
            let temp = product[i + j + 1] + carry + parseInt(a[i]) * parseInt(b[j]);
            product[i + j + 1] = temp % 10;
            carry = Math.floor(temp / 10);
        }
        product[i] += carry;
    }

    while (product[0] === 0) {
        product.shift();
    }

    return product.join("");
}