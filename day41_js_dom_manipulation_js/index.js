// const  element = document.querySelector(".container")
// console.log(element.childNodes)
// console.log(element.children)
// console.log(element.firstElementChild)
// console.log(element.lastElementChild)

// siblling

// const child2 = document.querySelector(".child2")
// // console.log(child2)
// console.log(child2.nextElementSibling)
// console.log(child2.previousElementSibling)

let buttuon = document.createElement("button")
buttuon.innerText = "Dynamic element"
document.querySelector("body").appendChild(buttuon)







const addelement=()=>{
    const div = document.createElement("h1");
    // div.className ="raju"
    div.setAttribute("class", "kaju");
    div.setAttribute("id", "raju");
    div.innerText = "this is my text";
    console.log("this is my div", div);
    console.log("this is my div text", div.innerText);
    div.style.backgroundColor="violet"
    document.querySelector(".child2").appendChild(div);
}

buttuon.addEventListener("click" , addelement)