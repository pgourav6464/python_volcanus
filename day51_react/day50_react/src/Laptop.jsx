import React from 'react'

const Laptop = () => {
    const lap={
        brandName:"hp pro book",
        processor:"intel i5 6th gen",
        ssd:"1tb",
        price:856478445

    }
  return (
    <div>
        <h1>this data from coming from laptop componet</h1>
        <h1>{lap.brandName}</h1>
        <h1>{lap.processor}</h1>
        <h1>{lap.ssd}</h1>
        <h1>{lap.price}</h1>
    </div>
  )
}

export default Laptop