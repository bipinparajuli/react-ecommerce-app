import React from 'react'

function ShoppingCart({image,name,price}) {
    return (
        <div>
            <h1>i am inside of shopping basket</h1>
            <img src={image} alt="none" />
    <h2>{name}</h2>
    <p>{price}</p>
        </div>
    )
}

export default ShoppingCart
