var binarySearch = function (arr, val) {
    var left = 0;
    var right = arr.length - 1;
    var mid;
    while (right >= left) {
        mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === val)
            return val;
        else if (arr[mid] < val)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
