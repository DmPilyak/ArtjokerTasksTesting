// my forEach

const arr = [1, 2, 8, 7, 6, 4, 7, 10]
const arr2 = [
    {name: 'Adil', age: 17},
    {name: 'Dmitriy', age: 21}
]

function myForEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == undefined){
            continue
        }
        callback(arr[i], i, arr)
    }
}

// function callback(element, i, arr) {
//     console.log(element); 
// }

myForEach(arr, (element, i) => {
    console.log('element: ', element, ' index: ', i)
})



// my map

function myMap(arr, callback){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'undefined'){
            newArr.push(arr[i])
        }
        else newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}

const mapArr = myMap(arr2, element => element.age + 2)
console.log(mapArr)



// my filter

function myFilter(arr, callback){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

const filterArr = myFilter(arr, el => el > 5)
console.log(filterArr)



// my reduce

function myReduce(arr, callback, initialVal){
    
    let accumulator
    if(initialVal === undefined){
        accumulator = 0
    } else accumulator = initialVal

    let start
    if(initialVal === undefined){
        start = 1
    } else start = 0

    for (var i = start; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i])
    }
    return accumulator;
}

const reduceSummArr = myReduce(arr, (accumulator, elem) => accumulator + elem, 10)
console.log(reduceSummArr)





