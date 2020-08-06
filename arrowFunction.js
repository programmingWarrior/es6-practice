const doubleIt = num => num*4;
const result = doubleIt(5);
console.log(result);

const add = (x,y) => x+y;
const sum = add(5,7);
console.log(sum);

const singleFun = () => 5;
const single = singleFun();
console.log(single); 

const doMath = (x,y) => {
    const sum = x + y;
    const substrac = x - y;
    const result = sum * substrac;
    return result;
}
const Multiply = doMath(10,5);
console.log(Multiply);