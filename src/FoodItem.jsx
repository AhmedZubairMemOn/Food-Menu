import React from 'react'

export const FoodItem = ({imageUrl , name , quantity}) => {
  return (
    <>
    <div style={{
        display:"flex",
        width:"45vw", 
        justifyContent:"center",
        margin:"10px",
        gap:"10px"
    }}>
        <div className="food-card" style={{
            width:"100px",
            height:"100px"
        }}>
            <img style={{
                width:"100%",
                height:"100%"
            }} src={imageUrl} alt="" />
        </div>
        <div>
            <p>{name}</p>
            <p style={{
                background :quantity  ? "aqua" : "White"
            }}>{quantity ? `Available:${quantity}`: 'Out of stock'}</p>
        </div>
    </div>
            </>
  )
}

