export const swap=(arr:number[],index1:number,index2:number)=>{
    let temp=arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=temp
}

const bubbleSort=(arr:number[]):number[]=>{
    for (let index = arr.length-1; index > 0; index--) {
        for (let j = 0; j < index; j++) {
            if(arr[j]>arr[j+1]) swap(arr,j,j+1)
        }
    }
    return arr
}
