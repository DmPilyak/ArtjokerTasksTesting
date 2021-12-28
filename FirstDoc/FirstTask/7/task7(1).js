let arr = [ [1, 2, 3, 4],
            [5, 6, 0, 8],
            [9, 0, 11, 12],
            [13, 14, 15, 16] ]


function deleteColumn(arr){
    let removesCollumnsIndex = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            if(arr[i][j] === 0){
                removesCollumnsIndex.push(i)
            }
        }
    }
    
    let newArr = arr.map(function(val, ind){
        return val.filter(function(val, ind) { 
            return !removesCollumnsIndex.includes(ind); 
        });
    });
    return newArr
}

console.log(deleteColumn(arr))

