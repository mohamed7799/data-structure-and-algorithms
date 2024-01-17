import { swap } from "./bubbleSort";

const selectionSort=(arr:number[]):number[]=>{
   
    for (let index = 0; index < arr.length-1; index++) {
        let oldMinIndex=index;
        for (let j = index+1; j < arr.length; j++) {
            if(arr[j]<arr[oldMinIndex]) oldMinIndex=j            
            console.log(index,j)
        }
        if(index!==oldMinIndex)swap(arr,index,oldMinIndex)
    }
    
    return arr
}

console.log(selectionSort([2,5,3,10,9,0]))