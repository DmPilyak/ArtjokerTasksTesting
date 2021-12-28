class Rectangle {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get propHeight(){
        return this.height
    }

    get propWidth(){
        return this.width
    }

    set propHeight(val){
        this.height = val
    }

    set propWidth(val){
        this.width = val
    }

    getPerimeter(){
        if(this.height === this.width){
            return this.height * 4
        } else {
            return (this.height * 2) + (this.width * 2)
        }
    }
    
    getSquare(){
        return this.height * this.width
    }

}