//frequncy counter pattern
var sameButSquared = function (arr1, arr2) {
    var frequncyCounter1 = {};
    var frequncyCounter2 = {};
    if (arr1.length !== arr2.length)
        return false;
    arr1.forEach(function (element) {
        frequncyCounter1[element] = (frequncyCounter1[element] || 0) + 1;
    });
    arr2.forEach(function (element) {
        frequncyCounter2[element] = (frequncyCounter2[element] || 0) + 1;
    });
    for (var key in frequncyCounter1) {
        if (!frequncyCounter2.hasOwnProperty("".concat(Math.pow(parseInt(key), 2))) || frequncyCounter1[key] !== frequncyCounter2[Math.pow(parseInt(key), 2)]) {
            return false;
        }
    }
    return true;
};
var validAnagram = function (str1, str2) {
    var frequncyCounter1 = {};
    var frequncyCounter2 = {};
    if (str1.length !== str2.length)
        return false;
    for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
        var element = str1_1[_i];
        frequncyCounter1[element] = (frequncyCounter1[element] || 0) + 1;
    }
    for (var _a = 0, str2_1 = str2; _a < str2_1.length; _a++) {
        var element = str2_1[_a];
        frequncyCounter2[element] = (frequncyCounter2[element] || 0) + 1;
    }
    for (var key in frequncyCounter1) {
        if (!frequncyCounter2.hasOwnProperty(key) || frequncyCounter1[key] !== frequncyCounter2[key]) {
            return false;
        }
    }
    return true;
};
//multiple pointers
var sumZero = function (arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start !== end) {
        if (arr[end] + arr[start] > 0)
            end--;
        else if (arr[end] + arr[start] < 0)
            start++;
        else
            return [arr[start], arr[end]];
    }
    return;
};
var countUniqueValues = function (arr) {
    var frequncyCounter = {};
    arr.forEach(function (element) {
        frequncyCounter[element] = (frequncyCounter[element] || 0) + 1;
    });
    return Object.keys(frequncyCounter).length;
};
var countUniqueValues2 = function (arr) {
    var result = 0;
    var start = 0;
    var end = 1;
    var currentValue = arr[start];
    while (end !== arr.length - 1) {
        if (arr[end] !== currentValue) {
            console.log(currentValue);
            result++;
            start++;
            currentValue = arr[start];
        }
        end++;
    }
    return result;
};
