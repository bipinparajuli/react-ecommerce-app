import React from 'react'
import ShoppingCart from '../../ShoppingCart/ShoppingCart'
import {useStateValue} from '../../../container/StateProvider'
import HomeUi from './HomeUi/HomeUi'
import Card from '../Card/Card'



function Home() {
    const [{Others}]=useStateValue();

    return (
        <>
        <HomeUi/>
        <Card />
        {
        /*<div className='Card'>
    
        </div>
        {
            basket?.length === 0 ?(
                
                <div>
                    <h2>Our Shopping card is empty</h2>
                </div>
            ):(
                <div>
                    <h2>Our Shopping Basket</h2>
                    {
                        
                        basket?.map(item=>{
                     return(
                        <ShoppingCart
                        name={item.name}
                       price={item.price}
                       image={item.image} />
                     )
                         
                        })
                    }
                </div>
            )
        }
        */
}

        </>
    )
}

export default Home
