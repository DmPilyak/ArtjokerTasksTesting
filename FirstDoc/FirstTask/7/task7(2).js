let deleteRows = (matrix) => {
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === 0){
        matrix.splice(i, 1);
        i--;
        break;
      };
    };
  };
  return matrix;
};