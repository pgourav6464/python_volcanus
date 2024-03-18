const date = new Date();
setInterval (()=>{

console.log(date);

const crdate = date.getDate();
const crday = date.getDay();
const cryear = date.getFullYear();
const month = date.getMonth() + 1;
const hour = date.getHours();
const minut = date.getMinutes();
const second = date.getSeconds();

console.log(`today date is =${crdate}-${month}-${cryear}`);

console.log(`current time is =${hour}:${minut}:${second}`);

const year = ["    " ]

 console.log("hello")
const element = document.querySelector("h1");
element.innerText = `current time is =${hour}:${minut}:${second}`;
console.log(element);
},1000);

