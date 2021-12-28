
console.log('***Triangle***')
let triangle = new Triangle(5, 3, 4)
console.log('Perimeter of a triangle (with a sides ' + triangle.propA + ', ' 
+ triangle.propB + ' , ' + triangle.propC + ') = ' + triangle.getPerimeter())
console.log('Square of a triangle (with a sides ' + triangle.propA 
+ ', ' + triangle.propB + ' , ' + triangle.propC + ') = ' + triangle.getSquare())
triangle.propA = 6
console.log('Side A has been changed')
console.log('Perimeter of a triangle (with a sides ' + triangle.propA + ', ' 
+ triangle.propB + ' , ' + triangle.propC + ') = ' + triangle.getPerimeter())
console.log('Square of a triangle (with a sides ' + triangle.propA + ', ' 
+ triangle.propB + ' , ' + triangle.propC + ') = ' + triangle.getSquare())

console.log('***Circle***')
let circle = new Circle(5)
console.log('Square of a circle (with a radius ' + circle.propRadius + ') = ' + circle.getSquare())
circle.propRadius = 3
console.log('Radius has been changed')
console.log('Square of a circle (with a radius ' + circle.propRadius + ') = ' + circle.getSquare())


console.log('***Rectangle***')
let rectangle = new Rectangle(8, 5)
console.log('Perimeter of a rectangle (with a sides ' + rectangle.propHeight 
+ ', ' + rectangle.propWidth + ') = ' + + rectangle.getPerimeter())
console.log('Square of a rectangle (with a sides ' + rectangle.propHeight 
+ ', ' + rectangle.propWidth + ') = ' + + rectangle.getSquare())
