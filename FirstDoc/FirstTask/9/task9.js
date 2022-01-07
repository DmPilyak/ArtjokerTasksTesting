const arr = [5, 2, 8, 7, 6, 4, 7, 10];
const person = [
  {name: 'Adil', age: 17},
  {name: 'Dmitriy', age: 21}
];
let myForEach = (arr, callback) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == undefined){
      continue;
    }
    callback(arr[i], i, arr);
  };
};
myForEach(arr, (element, i) => {
  return ('element: ', element, ' index: ', i);
});
let myMap = (arr, callback) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'undefined'){
      result.push(arr[i]);
    } else {
			result.push(callback(arr[i], i, arr));
		};
  };
  return result;
};
const mapArr = myMap(person, element => element.age + 2);
let myFilter = (arr, callback) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)){
      result.push(arr[i]);
    };
  };
  return result;
};
const filterArr = myFilter(arr, el => el > 5);
let myReduce = (arr, callback, initialVal) => {
  let accumulator;
  if(initialVal === undefined){
    accumulator = 0;
  } else {
		accumulator = initialVal;
	};
  for (var i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  };
  return accumulator;
};
const reduceSummArr = myReduce(arr, (accumulator, elem) => accumulator + elem, 10);