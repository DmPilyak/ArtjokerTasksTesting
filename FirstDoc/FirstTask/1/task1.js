// 1) iterated object fibo numbers

const count = 10
let prev = 0
let next = 1

const fiboNums = {
    from: 0,
    to: 10,

    [Symbol.iterator](){
        return {
            current: this.from,
            last: this.to,
            next() {
                return {
                    done: this.current > this.last,
                    value: this.current,
                    current: this.current++
                }
            }
        }
    }
}

for (let element of fiboNums) {
    console.log("Fibonacci number: " + element)
}
console.log('')



// 2) ***Recursion Fibonacci function***
console.log('***Recursion Fibonacci function***')

function recursionFibo(n) {
    if(n < 2){ return n }
    else {
        return recursionFibo(n - 1) + recursionFibo(n - 2)
    }
};

const n = 10    // n - index of Fibonacci number
const startTimeRecursionTest = new Date().getTime();    // time
for(let i = 0; i < n; i++) {
    console.log("Fibonacci number: " + recursionFibo(i) + "  -  index: " + (i + 1));
}
const endTimeRecursionTest = new Date().getTime();
console.log('Recursion time: ', endTimeRecursionTest - startTimeRecursionTest, 'ms');
console.log('')


// 3) ***Memoization Fibonacci function***
console.log('***Memoiztion Fibonacci function***')

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

const recursionFiboForMemoization = memoFunc((n) => {
    if(n < 2){ return n }
    else {
        return recursionFiboForMemoization(n - 1) + recursionFiboForMemoization(n - 2)
    }
});

const m = 10    // m - index of Fibonacci number
const startTimeMemoTest = new Date().getTime(); // time
for(let i = 0; i < m; i++) {
    console.log("Fibonacci number: " + recursionFiboForMemoization(i) + "  -  index: " + (i + 1));
}
const endTimeMemoTest = new Date().getTime();
console.log('Memoization + recursion time: ', endTimeMemoTest - startTimeMemoTest, 'ms');









