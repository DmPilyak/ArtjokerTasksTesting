let arr2 = [ [1, 2, 3, 4],
            [5, 6, 0, 8],
            [9, 10, 11, 12],
            [13, 14, 0, 16] ]


function deleteRows(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            if(arr[i][j] === 0){
                arr.splice(i, 1)
                i--
                break
            }
        }
    }
    return arr
}

console.log(deleteRows(arr2))