// promish has 3 stage 
// 1 pending state
// 2 fullfill -> resolve -> .them
// 3 reject -> reject-> .catch

let g = 100
let a =10

const p = new Promise((resolve , reject)=>{
    let rupees = g - a
    if(a>g){
        resolve("thik hai bhai me de dunga")
    }
    else{
        reject("nhi dunga")
    }
})

p.then((message)=>{
    console.log(message)
}).catch((msg)=>console.log(msg))

// p.catch((msg)=>{
//     console.log(msg)
// })
