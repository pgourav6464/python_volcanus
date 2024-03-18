const arr1 = [8,468,4,8,8,8,8,6,7,416,9,5,6]

console.log(arr1.includes(8))

const array = ["apple" , "lenovo" , "dell","xiaomi" , "hp" , "jio" ]
const searchelement = ""

console.log(array.includes(searchelement.toLocaleLowerCase()))

const r = array.map((e) => e+"y")
console.log(r)


// high order array method

// ~~~~~~~~~~~~~~~~~map method~~~~~~~~~~~~~~~~~~~~~~~~~ return array
const arr2 = [10,52,12,32,65,20,25,35]
const result = arr2.map((e)=>e+5)
console.log(result) 
// arr2.map((e)=> console.log(e))3

// ~~~~~~~~~~~~~~~filter method ~~~~~~~~~~~~~~~~~~~~~~~~

const arr = [10, 52, 12, 32, 65, 20, 25, 35];

const filterdata = arr.filter((e)=>e>30) //retun array

console.log(filterdata)

// const products = [
//   { id: 1, title: "i phone", category: "mobiles", price: 25641 },
//   { id: 2, title: "one plus 14 ", category: "mobiles", price: 256410 },
//   { id:3, title: "lenovo i5", category: "laptop", price: 256781 },
//   { id: 4, title: "hp notebook", category: "laptop", price: 525641 },
//   { id: 5, title: "apple tab", category: "tablet", price: 725641 },
//   { id: 6, title: "samsung tab", category: "tablet", price: 825641 },
// ];

// const element = "tablet"
// const filterByCategory = products.filter((e)=>e.catergory.toLocaleLowerCase()==element.toLocaleLowerCase())
// const filterByprice = products.filter((e)=>e.price >500000)

// const filterByTittle = products.filter((e)=>e.title.toLocaleLowerCase().includes("i" ))

// console.log(filterByTittle)