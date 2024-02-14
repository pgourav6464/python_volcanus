// ~~~~~~~~~~~~~for loop~~~~~~~~~~~~~~~~~~~~
// const arr = [10 , 20 , 50  ,"spiderman" , 202.3554]

// for (let i = 0 ; i<arr.length;i++){
//     console.log(arr[i])
// }

// ~~~~~~~~~~~~~~While loop~~~~~~~~~~~~~~~~~~~~~~

// let i = 0

// while(i<arr.length){
//     console.log(arr[i])
//     i++;
// }

// // ~~~~~~~~~~~~~~~~do while~~~~~~~~~~~~~~

// let j = 0
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length); 


// ~~~~~~~~~~~~~~foreach , map , fillter ~~~~~~~~~~~~~~~~~~~~~~

// const arr = [10, 20, 50, "spiderman", 202.3554];

// ~~~~~~~~~~~~~~~~~for in loop ~~~~~~~~~~~~~~~

// for (let x in arr){
//     console.log("index of eliment" , x , "=" ,arr[x])
// }
// ~~~~~~~~~~~~~~~~~for of loop ~~~~~~~~~~~~~~~

// for (let x of arr){
//     console.log(x)
// }




// const person ={
//     Name: "ashish",
//     surname:"yadav",
//     height:4.2,
//     school:"sarkari",
//     age:18,
//     freind:"gourav",
//     favlag:"python",
//     bike:"hornet",
//     hair:"black",
//     single:"yes"


// }

// for ( let i in person){
//     console.log(i ,"=",person[i])
// }

// for ( let j of person){
//     console.log(j)
// }

// ~~~~~~~~~~~~~~~~~for each loop ~~~~~~~~~~~~~~

const arr = [10, 20, 50, "spiderman", 202.3554];

arr.forEach((value, index ) => console.log(value , index ))




ar=[1,2,56,9,8,8,9,]

ar.forEach((value, index) => {
    if(value%2==0){
    console.log(value, index);}
});

