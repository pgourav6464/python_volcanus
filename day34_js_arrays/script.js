let heros = [,1,5,65,5,5,9,8,6,7,9,4,96,6,89,5,,9,7,4,6,63]

let arrobj = [
  { Name: "grp", gav: "indore", age: 22 },
  { Name: "ayz", gav: "dewash", age: 20 },
  { Name: "rahul", gav: "sagar", age: 18 },
  { Name: "sonu", gav: "bhopal", age: 26 },
];

console.log(arrobj[2].Name)

let arr = [1,89,7,8,9]
console.log("original array" ,arr)

arr.push(25)
console.log("add value using push in array", arr);


arr.pop();
console.log("remove last value using pop in array", arr);


arr.shift()
console.log("remove   1stvalue using shift in array", arr);

arr.unshift(500)
console.log("add  1stvalue using unshift in array", arr);