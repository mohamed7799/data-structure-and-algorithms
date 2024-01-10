const factorial=(num:number):number=>{
    if(num===1) return 1
    return num*factorial(num-1)
}

/* console.log(factorial(5)) */

const GCD=(a:number,b:number):number=>{
    if(b===0) return a
    return GCD(b,a%b)
}




const outerRange=(start:number,end:number):number[]=>{
    let result:number[]=[]

    const range=(start:number,end:number):undefined=>{
        if(start===end) return
        result.push(start)
        range(start+1,end)
    }
    range(start+1,end)
    return result
}

const sum=(arr:number[]):number=>{
    if(arr.length===1) return arr[0]
    return arr[0]+sum(arr.slice(1))
}

let exponent =(base:number, exp:number):number=> {
    if(exp===0) return 1
    return base * exponent(base,exp-1) 
};

let powerOfTwo = function(n) {
    if(n===1) return true
    if(n%2!==0) return false
   return powerOfTwo(n/2)  
};

let reverse = function(string:string):string {
    let newStr=''
    const helper=(string:string)=>{
        if(string.length===0) return
        newStr+=string[string.length-1]
        helper(string.slice(0,-1))
    }
    helper(string)
    return newStr
};

let palindrome = function(string:string):boolean {
    if(string.length===1) return true
    if(string[0]!==string[string.length-1]) return false
    return palindrome(string.slice(1,-1))
};

console.log(palindrome('madam'))