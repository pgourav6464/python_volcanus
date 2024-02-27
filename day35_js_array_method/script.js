// let arr = [10,20,30,40,50]

// // first arugment is index of elements ,  second argument ishow many elements we want to remove splice edit original arry
// arr.splice(0 , 3)
// console.log(arr)

// // both argument is index or array slice give new array
// let sliceArr = arr.slice(1,2)
// console.log(sliceArr);


// let arr1 = ["lappy" , "tab" ,"phone"]
// let arr2 = ["apple" , "mango" ,"orange"]

// let newarr = arr1.concat(arr2)

// console.log(newarr)




// indexof 


// let arry = ["lappy", "tab", "phone" , "phone"];
// console.log("first index of elements = " , arry.indexOf("phone"))
// console.log(" last index of elements = " , arry.lastIndexOf("phone"))

const array = [1,5,6,8,4,65,4,4,6,4]

let element = 6

for (let x in array){
    if(array[x]==element){
        array.splice(x , 1)
    }
}


console.log(array)

