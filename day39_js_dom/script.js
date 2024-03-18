console.log("hello")

// id ,tagname , classname

// const element = document.getElementsByTagName("h1");
// const element2 = document.getElementById("h1");
// const element3 = document.getElementsByClassName("h1");

// // element[0].style.backgroundColor = "yellow";



// const element1 = document.querySelectorAll('h1')
// const element2 = document.querySelector('#h1')
// const element3 = document.querySelector('.h1')

// console.log(element1);
// console.log(element2)
// console.log(element3)

// let element = document.querySelector(".container")

// element.innerHTML = "<h1> This is dynamic content</h1>";
// element.innerText="this is dynamic content"

// let h1 = document.querySelector("h1")
// let container = (document.querySelector(".container").innerHTML = `<h1>${h1.innerHTML}</h1>`);

let img = document.querySelector("img")


// img.style.border = "5px solid red"
// h1.style.color = "blue"

const body = document.querySelector("body");
const button = document.querySelector("button")
let num = 1;

const bgLight = () =>{
    
    num++;
    if (num%2==0){
      body.style.backgroundColor = "white";
      body.style.color = "black";
      button.innerText = "darkmode"
       button.style.backgroundColor = "blue";
       button.style.color="white"
       

    }
    else{
          body.style.backgroundColor = "black";
          body.style.color = "white";
           button.innerText = "lightmode";
           button.style.backgroundColor ="yellow"
           button.style.color = "black";
    }
}
const bgdark =()=>{
    body.style.backgroundColor = "black";
    body.style.color = "white";
}

const changeimg=()=>{
   
    img.src =
      "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_640.jpg";
}
const changeimg1=()=>{
   
    img.src =
      "https://cdn.pixabay.com/photo/2017/07/14/10/59/girl-2503468_640.jpg";
}



