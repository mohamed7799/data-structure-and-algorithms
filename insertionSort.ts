const insertionSort=(arr:number[]):number[]=>{
    for (let index = 1; index < arr.length; index++) {
        let currVal=arr[index]
        let j=index-1
        while(j>=0&&arr[j]>currVal)
        {
            arr[j+1]=arr[j]        
            j--
        }
     arr[j+1]=currVal
    }
    
    return arr
}


console.log(insertionSort([5,3,2,7,6]))