// function doubleIt(num){
//     return num*2;
// }

// 

const doubleIt = num => num*2;

const doMath = (x,y) =>{
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}

const result = doubleIt(50);
const result2 = doMath(5,7)
console.log(result2);