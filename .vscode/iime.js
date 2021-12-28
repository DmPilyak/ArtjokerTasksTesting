// const person = {
//     surname: 'Pilyak',
//     knows: function(what, name){
//         console.log(`${name} ${this.surname} like a ${what}`)
//     }
// }

// person.knows('Football', 'Dmitriy')

// const pasha = {surname: 'Tsuber'}
// person.knows.call(pasha, 'Study', 'Pavel')

// let nums = [1,3,5,6]
// let target = 7
// var searchInsert = function(nums, target) {
//     if(nums[nums.length - 1] < target) return nums.length
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] >= target) return i
//     }

// };
// console.log(searchInsert(nums, target))


// Транспонировать матрицу, сложить две матрицы
// let arr = [ [1, 2, 3, 4],
//             [5, 6, 7, 8],
//             [9, 10, 11, 12],
//             [13, 14, 15, 16]]
// let rows = 4
// let columns = 4
// let arrResult = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
// console.log(arr[0][1]) //2
// let arrRowTemp
// console.log(arrRowTemp)
// for(let i = 0; i < columns; i++){
//     arrRowTemp = arr[i]
//     for(let j = 0; j < rows; j++){
//         arrResult[j][i] = arrRowTemp[j]
//     }
// }
// console.log(arrResult)


// callback

const arr = [5, 6, 7, 8]
function printArray(arr, callback){
    callback()
    arr.map(item => {
        console.log('Print: ', item)
    });
}

function print1(){
    console.log('Print 1')
}

function print2(){
    console.log('Print 2')
}

printArray(arr, print1)




