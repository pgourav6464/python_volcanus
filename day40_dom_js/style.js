// const container = document.querySelector('.container')

// const items = document.querySelector(".items:nth-child(3)")

// items.style.backgroundColor = "yellow"

// console.log(items.innerText) // show inner text but if we hide text through css its not show
// console.log(items.innerHTML)// show inner text and tag
// console.log(items.textContent)// show inner text but if we hide text through css its still  show all


const items = document.querySelectorAll(".items")

console.log(items)
let count = 1


const changestyle = ()=>{
    count++
if (count%2==0){
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "blue";
    items[i].style.color = "white";
    items[i].style.padding = "10px";
    items[i].style.border = "2px solid red";
  }
}
else{
     for (let i = 0; i < items.length; i++) {
       items[i].style.backgroundColor = "yellow";
       items[i].style.color = "black";
       items[i].style.padding = "10px";
       items[i].style.border = "2px solid red";
     }

}
}

document.querySelector("#btn").addEventListener("click" , changestyle)


const input = document.querySelector("#input")

const getinputvalue = ()=>{
    console.log(input.value)
}

// input.addEventListener("onchange",getinputvalue());