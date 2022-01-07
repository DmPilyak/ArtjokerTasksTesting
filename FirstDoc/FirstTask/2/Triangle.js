class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  sideA(){
    return this.a;
  };
  sideB(){
    return this.b;
  };
  sideC(){
    return this.c;
  };
  sideA(val){
    this.a = val;
  };
  sideB(val){
    this.b = val;
  };
  sideC(val){
    this.c = val;
  };
  perimeter(){
    return this.a + this.b + this.c;
  };
  square(){
    let perimeter = this.perimeter();
    let square = Math.sqrt(perimeter * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c));
    return square;
  };
};