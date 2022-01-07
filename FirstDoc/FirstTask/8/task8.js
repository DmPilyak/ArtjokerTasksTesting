const student = {
  firstName: 'Dmitriy',
  lastName: 'Pyliak',
  age: '21'
};
let myBind = (func, context, ...rest) => {
  return function(...args){
    const uniqueNumber = Date.now().toString();
    context[uniqueNumber] = func;
    const res = context[uniqueNumber](...rest.concat(args));
		return res;
  }
}
let myCall = (func, context, ...rest) => {
  const uniqueNumber = Date.now().toString();
  context[uniqueNumber] = func;
  const res = context[uniqueNumber](...rest);
	return res;
};
let getStudentInfo = (course) => {
  return (`Name: ${this.firstName}, Surname: ${this.lastName}, Age: ${this.age}, Course: ${course}`);
};
myBind(getStudentInfo, student)(4);
myCall(getStudentInfo, student, 3);