// console.log("hello ayz")
// //  let Name="superman"

// const heros={
//     Name:"superman",
//     age:400,
//     salary:789456,
//     company:function(){
//         return this;
//     },

// }

// function product(name , age){
//     this.name = name
//     this.age = age
//     this.y = this.Year
//     // return{name , age}
//     return this
// }

// product.prototype.Year = 2020;
// // console.log(heros)
// // console.log(this)

// const p1 =new product("grp",22)
// const p2 = new product("grp2",20)

// console.log(p1)
// console.log(p2) 

class car {
  constructor(brandName = null, Price = null, color) {
    this.b = brandName;
    this.p = Price;
    this.c = color;
  }
  display() {
    console.log(
      `this is brand name ="${this.b}" and price ="${this.p}" and color ="${this.c}"`
    );
  }
}

class bmw extends car {
  bmwDisplay() {
    console.log(this.b, this.p, this.c);
    return this.b;
  }
}
const c1 = new bmw("bmw", 258963147, "blue");
c1.display();
c1.bmwDisplay();
