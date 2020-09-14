import React from 'react'

function ShoppingCart(props) {
    return (
        <div>
            <h1>i am inside of shopping basket</h1>
            <img src={props.image} alt="none" />
    <h2>{props.name}</h2>
    <p>{props.price}</p>
        </div>
    )
}

export default ShoppingCart
