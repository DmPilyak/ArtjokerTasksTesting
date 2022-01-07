class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  };
  height(){
    return this.height;
  };
  width(){
    return this.width;
  };
  height(val){
    this.height = val;
  };
  width(val){
    this.width = val;
  };
  perimeter(){
    if(this.height === this.width){
      return this.height * 4;
    };
    return (this.height * 2) + (this.width * 2);
  }
  square(){
    return this.height * this.width;
  };
};