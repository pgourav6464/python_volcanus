const height = window.innerHeight
const width = window.innerWidth

document.querySelector(
  ".container"
).innerHTML = `<h1>broweser height ${height}</h1>
<h1>broweser width ${width}</h1>`;


const href = window.location.href

const hostname = window.location.hostname

document.querySelector(".bom").innerHTML=`
<h3> href=${href}</h3>
<h3> href=${hostname}</h3>



`