//transp matrix
let arr = [ 
    [1, 2, 3, 4], 
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]]
let rows = 4
let columns = 4

function transpMatrix(arr, rows, columns){
    let arrTranspMatrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
    let arrRowTemp
    for(let i = 0; i < columns; i++){
    arrRowTemp = arr[i]
        for(let j = 0; j < rows; j++){
            arrTranspMatrix[j][i] = arrRowTemp[j]
        }
    }
    return arrTranspMatrix
}
console.log('Start matrix: ', arr)
console.log('Transp matrix: ', transpMatrix(arr, rows, columns))

//summ two matrix
let secondMatix = transpMatrix(arr, rows, columns)

function sumTwoMaxrix(arr1, arr2, rows, columns){
    let sumMatrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
    for(let i = 0; i < columns; i++){
        for(let j = 0; j < rows; j++){
            sumMatrix[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return sumMatrix
}
console.log('Summ this two matrix: ', sumTwoMaxrix(arr, secondMatix, rows, columns))
