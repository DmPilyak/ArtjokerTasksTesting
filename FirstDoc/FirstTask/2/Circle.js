class Circle {

    constructor(radius){
        this.radius = radius
    }

    get propRadius(){
        return this.radius
    }

    set propRadius(val){
        this.radius = val
    }
    
    getSquare(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}