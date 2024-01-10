var factorial = function (num) {
    if (num === 1)
        return 1;
    return num * factorial(num - 1);
};
/* console.log(factorial(5)) */
var GCD = function (a, b) {
    if (b === 0)
        return a;
    return GCD(b, a % b);
};
var outerRange = function (start, end) {
    var result = [];
    var range = function (start, end) {
        if (start === end)
            return;
        result.push(start);
        range(start + 1, end);
    };
    range(start + 1, end);
    return result;
};
var sum = function (arr) {
    if (arr.length === 1)
        return arr[0];
    return arr[0] + sum(arr.slice(1));
};
var exponent = function (base, exp) {
    if (exp === 0)
        return 1;
    return base * exponent(base, exp - 1);
};
var powerOfTwo = function (n) {
    if (n === 1)
        return true;
    if (n % 2 !== 0)
        return false;
    return powerOfTwo(n / 2);
};
var reverse = function (string) {
    var newStr = '';
    var helper = function (string) {
        if (string.length === 0)
            return;
        newStr += string[string.length - 1];
        helper(string.slice(0, -1));
    };
    helper(string);
    return newStr;
};
var palindrome = function (string) {
    if (string.length === 1)
        return true;
    if (string[0] !== string[string.length - 1])
        return false;
    return palindrome(string.slice(1, -1));
};
console.log(palindrome('madam'));
