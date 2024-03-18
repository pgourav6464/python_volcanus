// const syncronus = ()=>{
//     console.log("superman")
//     console.log("batman")
//     console.log("spiderman")
// }

// const asycronus=()=>{
//     console.log("institute")
//     setTimeout(() => {
//         console.log("set time out institute")
//     }, 2000);
//     console.log("volcanus")
// }  
// syncronus()
// asycronus()

// fetch data using await


const fetchData= async()=>{
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?s=chiken"
    );
    const data = await api.json();
    console.log(data)
}

fetchData()


const fetchMealDb= async()=>{
    let api2 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=south"
    );
    const data = await api2.json()
    return data.meals
}
import { createClient } from "pexels";
const client = createClient(
  "LzW8hLjxBlsMEXQv7QKAG7veNR8B9Cy86OqbaA2h4THjhHVjfJK3kdb0"
);








fetchMealDb()

// const showData = async ()=>{
//     const data = await fetchMealDb()
//     console.log("this data from mealdb" , data)
//     // data
    
//   //   document.querySelector(
//   //     ".main"
//   //   ).innerHTML = `<div> <h1> ${data[].strMeal}</h1>
//   //  <img src=${data[0].strMealThumb}  style="width:300px;" /> 
//   //   </div>`;

//  document.querySelector(".main").innerHTML = 
  
// }

const showData = async ()=>{
  const data = await fetchMealDb()


  data.map((e)=>{
    let div = document.createElement("div")
    div.className="main"
    div.innerHTML=`<img src=${e.strMealThumb} alt="somthing wrong"/> <h3>${e.strMeal}</h3>`
    document.querySelector(".container").appendChild(div);
    
    
  })
}

showData()