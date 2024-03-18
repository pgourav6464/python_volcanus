// // featch data from async await

// // const fetchdata = async () => {
// //   const api = await fetch(
// //     "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
// //   );
// //   let data = await api.json();
// // //   console.log(data)
// //   return data.meals;
// // };

// // fetchdata();

// // const showData = async () => {
// //   const data = await fetchdata();
// //   data.map((e)=>{
// //     let div = document.createElement("div")
// //     div.className="main"
// //     div.innerHTML=`<img src=${e.strMealThumb} alt="yo"/> <h3>${e.strMeal}</h3>`
// //     document.querySelector(".container").append(div)
// //   })
// // };

// // showData()

// const fetchdataFrompromish = ()=>{
//     return new Promise((resolve , reject)=>{
//        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian").then((res)=>resolve(res.json())).catch((err)=>reject("rejected"))
//     })
// }

// // fetchdataFrompromish().then((res)=>console.log("data recived" , res)).catch((err)=>console.log("got eroor",err))
// fetchdataFrompromish()
//   .then((res) => {
//     const hold = res.meals;
//     hold.map((e) => {
//       let div = document.createElement("div");
//       div.className = "main";
//       div.innerHTML = ` <img src=${e.strMealThumb} alt="ok" /> <h3>${e.strMeal}</h3>`;
//       document.querySelector(".container").append(div);
//     });
//   })
//   .catch((err) => {
//     let div = document.createElement("div");
//     div.innerText = "got error data not recived";
//     document.querySelector(".container").append(div);
//     console.log(err);
//     // div.className = "main";
//   });


const fetchData = async ()=>{
    const api = await fetch("https://api.openbrewerydb.org/v1/breweries");
    const data = await api.json()
    console.log(data)
}
const fetchData2 = async ()=>{
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
    );
    const data = await api.json()
    console.log(data)
}
fetchData()
fetchData2()

