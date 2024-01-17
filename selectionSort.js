"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubbleSort_1 = require("./bubbleSort");
var selectionSort = function (arr) {
    for (var index = 0; index < arr.length - 1; index++) {
        var oldMinIndex = index;
        for (var j = index + 1; j < arr.length; j++) {
            if (arr[j] < arr[oldMinIndex])
                oldMinIndex = j;
            console.log(index, j);
        }
        if (index !== oldMinIndex)
            (0, bubbleSort_1.swap)(arr, index, oldMinIndex);
    }
    return arr;
};
console.log(selectionSort([2, 5, 3, 10, 9, 0]));
