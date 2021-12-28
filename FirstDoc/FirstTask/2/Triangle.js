class Triangle {

    constructor(a, b, c) {
        this.a = a
        this.b = b 
        this.c = c
    }

    get propA(){
        return this.a
    }

    get propB(){
        return this.b
    }

    get propC(){
        return this.c
    }

    set propA(val){
        this.a = val
    }

    set propB(val){
        this.b = val
    }

    set propC(val){
        this.c = val
    }

    getPerimeter(){
        return this.a + this.b + this.c
    }
    
    getSquare(){
        let perimeter = this.getPerimeter()
        let square = Math.sqrt(perimeter * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c)) 
        return square
    }
}