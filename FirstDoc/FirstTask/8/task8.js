const student = {
    firstName: 'Dmitriy',
    lastName: 'Pyliak',
    age: '21'
}

// my custom function bind
function myBind(func, context, ...rest){
    return function(...args){
        const unique = Date.now().toString()   //get unique num
        context[unique] = func
        const res = context[unique](...rest.concat(args))
    }
}

// my custom function call
function myCall(func, context, ...rest){
    const unique = Date.now().toString()   //get unique num
    context[unique] = func
    const res = context[unique](...rest)
}

function getStudentInfo(course){
    console.log(`Name: ${this.name}, Surname: ${this.lastName}, Age: ${this.age}, Course: ${course}`)
}

//getStudentInfo.bind(student)('4')
myBind(getStudentInfo, student)('4')

//getStudentInfo.call(student, '4')
myCall(getStudentInfo, student, '4')