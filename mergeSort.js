var mergeArrays = function (arr1, arr2) {
    var newArr = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        }
        else {
            newArr.push(arr1[i]);
            newArr.push(arr2[j]);
            i++;
            j++;
        }
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    while (i < arr1.length) {
        {
            newArr.push(arr1[i]);
            i++;
        }
    }
    return newArr;
};
var mergeSort = function (arr) {
    if (arr.length <= 1)
        return arr;
    var middleIndex = Math.floor(arr.length / 2);
    return mergeArrays(mergeSort(arr.slice(0, middleIndex)), mergeSort(arr.slice(middleIndex)));
};
console.log(mergeSort([1, 3, 5, 10, 2, 7]));
