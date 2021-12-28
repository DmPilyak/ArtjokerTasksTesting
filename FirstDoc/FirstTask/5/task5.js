//calculate factorial of number + memoization
let num = 12

const memoFunc = (fn) => {
    const cache = {};

    return (n) => {
        if (n in cache) return cache[n];
        else{
            cache[n] = fn(n)
            return cache[n]
        } 
    }
}

const calculateFactorialOfNumber = memoFunc((num) => {
    if(num === 1) return 1
    else return num * calculateFactorialOfNumber(num - 1)
});

console.log(num + '! = ' + calculateFactorialOfNumber(num))