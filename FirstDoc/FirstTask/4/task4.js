let number = 1253;
let binaryNumber = number.toString(2);
let convertDecimalToBinary = (number) => {
  let reminder = number;
  let division = number;
  let answer = '';
  do {
    reminder = division % 2;
    division = Math.floor(division / 2);
    answer = answer.concat(reminder);
  } while(division >= 2);
  answer = answer.concat(division);
  return answer.split('').reverse().join('');
};
let binary = convertDecimalToBinary(number);
let convertBinaryToDecimal = (number) => {
  let validationArr = String(number).split("").map((number) => {
    return Number(number);
  });
  for(let i = 0; i < validationArr.length; i++) {
    if(validationArr[i] > 1) {
      return 'Incorrect data (not binary input number!)';
    };
  };
  let answer = parseInt(number, 2);
  if(isNaN(answer)) {
		return 'Incorrect data';
	};
  return answer;
};
let decimal = convertBinaryToDecimal(binary);