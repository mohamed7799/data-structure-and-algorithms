//frequncy counter pattern

const sameButSquared = (arr1, arr2) => {
    let frequncyCounter1 = {}
    let frequncyCounter2 = {}
    if (arr1.length !== arr2.length) return false

    arr1.forEach(element => {
        frequncyCounter1[element] = (frequncyCounter1[element] || 0) + 1
    });
    arr2.forEach(element => {
        frequncyCounter2[element] = (frequncyCounter2[element] || 0) + 1
    });

    for (const key in frequncyCounter1) {
        if (!frequncyCounter2.hasOwnProperty(`${parseInt(key) ** 2}`) || frequncyCounter1[key] !== frequncyCounter2[parseInt(key) ** 2]) {
            return false
        }
    }
    return true
}

const validAnagram = (str1:string, str2:string) => {
    let frequncyCounter1 = {}
    let frequncyCounter2 = {}
    if (str1.length !== str2.length) return false
    for (let element of str1) {
        frequncyCounter1[element] = (frequncyCounter1[element] || 0) + 1
    }
    for (let element of str2) {
        frequncyCounter2[element] = (frequncyCounter2[element] || 0) + 1
    }
    for (const key in frequncyCounter1) {
        if (!frequncyCounter2.hasOwnProperty(key) || frequncyCounter1[key] !== frequncyCounter2[key]) {
            return false
        }
    }
    return true
}
//multiple pointers

const sumZero=(arr:number[]):number[]|undefined=>{
    let start=0
    let end=arr.length-1
    while(start!==end){
        if(arr[end]+arr[start] > 0) end--
        else if(arr[end]+arr[start] < 0) start++
        else return [arr[start],arr[end]]
    }
    return 
}

const countUniqueValues=(arr:number[]):number=>{
    let frequncyCounter={}
    arr.forEach(element => {
        frequncyCounter[element]=(frequncyCounter[element]||0)+1
    });

    return Object.keys(frequncyCounter).length 
}

const countUniqueValues2=(arr:number[]):number=>{
    let result=0
    let start=0
    let end=1
    let currentValue=arr[start]
    while(end!==arr.length-1){
        if(arr[end]!==currentValue) {
            console.log(currentValue)
            result++
            start++
            currentValue=arr[start]
        }
        end++
    }
 
    return result
}