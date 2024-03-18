// fetching data from api
let search = "animal";
const fetchData = async()=>{
    const api = await fetch(
      `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
      {
        headers: {
          Authorization:
            "LzW8hLjxBlsMEXQv7QKAG7veNR8B9Cy86OqbaA2h4THjhHVjfJK3kdb0",
        },
      }
    );
    const data = await api.json()
    console.log(data.photos)
    return data.photos
}
fetchData()

// show data

const showData= async()=>{
    const data = await fetchData()
    data.map((e)=>{
        
         let div = document.createElement("div");
         div.className = "main";
         div.innerHTML=`<img src=${e.src.medium} alt="none" />`
         document.querySelector(".container").append(div)
        //  console.log(data);
    }
    )
   
    
}

const remove=()=>{
   let count = document.querySelector(".container").childElementCount
   for (let x=0 ; x<count;x++){
    document.querySelector(".main").remove()
   }
}


const searhItem =()=>{
    let input = document.querySelector("input");
    search = input.value
    remove()
    showData()

}

document.querySelector("button").addEventListener("click" ,searhItem)
showData()