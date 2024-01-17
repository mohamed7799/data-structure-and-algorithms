"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubbleSort_1 = require("./bubbleSort");
var pivot = function (arr, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length; }
    var pivotVal = arr[left];
    var currPivot = left;
    for (var index = left + 1; index < right; index++) {
        if (arr[index] < pivotVal) {
            currPivot++;
            (0, bubbleSort_1.swap)(arr, currPivot, index);
        }
    }
    (0, bubbleSort_1.swap)(arr, left, currPivot);
    return currPivot;
};
var quickSort = function (arr, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length; }
    if (left < right) {
        var pivotVal = pivot(arr, left, right);
        quickSort(arr, left, pivotVal);
        quickSort(arr, pivotVal + 1, right);
    }
    return arr;
};
console.log(quickSort([5, 2, 6, 4, 10]));
