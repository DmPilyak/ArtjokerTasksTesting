// from decimal to binary
let num = 1253

//we can use toString with parameter 2
console.log(num + ' to binary = ' + num.toString(2))

//or we can make the algorithm manually
function decimalToBinary(num){
    let reminder = num
    let division = num
    let str = ''
    do {
        reminder = division % 2
        division = Math.floor(division / 2)
        str = str.concat(reminder)
    } while(division >= 2);
    str = str.concat(division)
    return str.split('').reverse().join('')
}
console.log(num + ' to binary = ' + decimalToBinary(num))



// from binary to decimal
let binaryNumber = 10011001

function binaryToDecimal(num){
    let validationArr = String(num).split("").map((num) => {
        return Number(num)
    })
    
    for(let i = 0; i < validationArr.length; i++) {
        if(validationArr[i] > 1) return 'Incorrect data (not binary input number!)'
    }

    let answer = parseInt(num, 2)
    if(isNaN(answer)) return 'Incorrect data'
    else return answer
}

console.log(binaryNumber + ' to decimal = ' + binaryToDecimal(binaryNumber))