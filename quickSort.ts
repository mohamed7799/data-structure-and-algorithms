import { swap } from "./bubbleSort";

const pivot=(arr:number[],left=0,right=arr.length):number=>{
let pivotVal=arr[left];
let currPivot=left;

for (let index = left+1; index < right; index++) {
    if(arr[index]<pivotVal){
        currPivot++
        swap(arr,currPivot,index)
    }
    
}
swap(arr,left,currPivot)
return currPivot
}


const quickSort=(arr:number[],left=0,right=arr.length):number[]=>{
    if(left<right){
        let pivotVal=pivot(arr,left,right)
        quickSort(arr,left,pivotVal)
        quickSort(arr,pivotVal+1,right)
    }
    return arr
}


console.log(quickSort([5,2,6,4,10]))