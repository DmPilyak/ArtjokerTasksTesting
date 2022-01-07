let arr = [5, -3, 8, 14, -2, 0, 15, 6, 0, 3, -5, 0, 7, -11]
arr.sort(compareNumbers)
function compareNumbers(firstNum, secondNum) {
  return firstNum - secondNum;
}
let zeroCounter = 0
for(let i = 0; i < arr.length; i++){
  if(arr[i] === 0){
    zeroCounter++
  }
}
let negativeCounter = 0
for(let i = 0; i < arr.length; i++){
  if(arr[i] < 0){
    negativeCounter++
  }
}
let positiveCounter = 0
for(let i = 0; i < arr.length; i++){
  if(arr[i] > 0){
    positiveCounter++
  }
}