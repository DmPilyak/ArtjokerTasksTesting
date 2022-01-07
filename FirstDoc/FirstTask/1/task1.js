const nunber = 10;
let prev = 0;
let next = 1;
const fiboNums = {
	from: 0,
	to: 10,
	[Symbol.iterator]() {
		return {
			current: this.from,
			last: this.to,
			next() {
				return {
					done: this.current > this.last,
					value: this.current,
					current: this.current++
				};
			}
		};
	}
};
let getFibonacci = (nunber) => {
	if (nunber < 2) {
		return nunber;
	}
	let result = getFibonacci(nunber - 1) + getFibonacci(nunber - 2);
	return result;
};
let fibonacciNumber = getFibonacci(nunber);
const setMemoszation = (func) => {
	const cache = {};
	return (nunber) => {
		if (nunber in cache) {
			return cache[nunber];
		};
		cache[nunber] = func(nunber)
		return cache[nunber]
	};
};
const getMemoizationFibonacci = setMemoszation((nunber) => {
	if (nunber < 2) {
		return nunber;
	};
	return (getMemoizationFibonacci(nunber - 1) + getMemoizationFibonacci(nunber - 2));
});
let result = getMemoizationFibonacci(nunber);