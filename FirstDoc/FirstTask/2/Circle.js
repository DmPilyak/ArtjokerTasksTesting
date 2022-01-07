class Circle {
  constructor(radius){
    this.radius = radius;
  };
  radius(){
    return this.radius;
  };
  radius(val){
    this.radius = val;
  };
  square(){
    return Math.PI * Math.pow(this.radius, 2);
  };
};