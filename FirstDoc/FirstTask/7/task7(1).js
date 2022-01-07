let matrix = [ 
	[1, 2, 3, 4],
  [5, 6, 0, 8],
	[9, 0, 11, 12],          
	[13, 14, 15, 16] 
];
let deleteColumn = (matrix) => {
  let removeCollumnsIndex = [];
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === 0){
        removeCollumnsIndex.push(i);
      };
    };
  };
  let resultMatrix = matrix.map(function(val, ind){
    return val.filter(function(val, ind) { 
      return !removeCollumnsIndex.includes(ind);     
		});
  });
  return resultMatrix
};
let resultMatrix = deleteColumn(matrix);