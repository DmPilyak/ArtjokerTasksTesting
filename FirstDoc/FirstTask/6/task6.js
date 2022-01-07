let matrix = [ 
  [1, 2, 3, 4], 
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]];
let rows = 4;
let columns = 4;
let transpositionMatrix = (matrix, rows, columns) => {
  let arrTranspMatrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  let arrRowTemp;
  for(let i = 0; i < columns; i++){
    arrRowTemp = matrix[i];
    for(let j = 0; j < rows; j++){
      arrTranspMatrix[j][i] = arrRowTemp[j];
    };
  };
  return arrTranspMatrix;
};
let sumTwoMaxrix = (firstMatrix, secondMatrix, rows, columns) => {
  let resultSumMatrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  for(let i = 0; i < columns; i++){
    for(let j = 0; j < rows; j++){
      resultSumMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
    };
  };
  return resultSumMatrix;
};
let result = sumTwoMaxrix(matrix, transpositionMatrix(matrix, rows, columns), rows, columns);