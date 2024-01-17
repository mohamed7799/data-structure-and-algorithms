"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
var swap = function (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};
exports.swap = swap;
var bubbleSort = function (arr) {
    for (var index = arr.length - 1; index > 0; index--) {
        for (var j = 0; j < index; j++) {
            if (arr[j] > arr[j + 1])
                (0, exports.swap)(arr, j, j + 1);
        }
    }
    return arr;
};
