// const person = {
//   Name: "ram",
//   salary: 256987412,
//   display: function t() {
//     console.log(`name = ${this.Name}, salary=${this.salary}`);
//   },
// };

// // console.log(person)
// console.log(person.display())

class car{
    constructor(name=null  , price=null , brandname=null){
        this.n = name
        this.p = price
        this.b = brandname
    } 
}

c =new car()
console.log(typeof(c))