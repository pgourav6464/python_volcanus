let input = document.querySelector("input")

let button = document.querySelector("#btn")

const search = ()=>{
    // window.open(input.value)
    let url = `https://www.${input.value}.com`;
    window.alert(`Are ypu sure to open "${url}"`)
    window.open(url)

}
button.addEventListener("click" , search)



const timeout = setTimeout(()=>{
document.querySelector(".time").innerHTML =
  "We are learnig setTimeout function";

},5000)

document.querySelector("#b1").addEventListener("click" , timeout)





document.querySelector("#b2").addEventListener("click")