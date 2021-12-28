let arr = [5, -3, 8, 14, -2, 0, 15, 6, 0, 3, -5, 0, 7, -11]

console.log(arr)
arr.sort(compareNumbers)
console.log(arr)

//compare two numbers for sorting 
function compareNumbers(a, b) {
    return a - b;
}
console.log('Min number in the array: ' + arr[0])
console.log('Max number in the array: ' + arr[arr.length - 1])

let zeroCounter = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
        zeroCounter++
    }
}
console.log('Number of zeros in the array: ' + zeroCounter)

let negativeCounter = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        negativeCounter++
    }
}
console.log('Negative numbers in the array: ' + negativeCounter)

let positiveCounter = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        positiveCounter++
    }
}
console.log('Positive numbers in the array: ' + positiveCounter)
