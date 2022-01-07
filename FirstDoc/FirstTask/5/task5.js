let number = 12;
const setMemoization = (func) => {
  const cache = {};
  return (number) => {
    if (number in cache) {
			return cache[number];
		};
    cache[number] = func(number);
    return cache[number]; 
  }
}
let factorial = setMemoization((number) => {
  if(number === 1) {
		return 1;
	};
  return number * factorial(number - 1);
});
factorial(number);