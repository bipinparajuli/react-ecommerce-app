import React,{useEffect,useState} from 'react'
import CheckOutPage from './CheckOutPage/CheckOutPage'
import axios from '../../container/Server/axios'
import {useStateValue} from '../../container/StateProvider'

function Checkout() {
const [{login}] = useStateValue();
console.log(login)
    const [state, setstate] = useState([]);
    
    useEffect(() => {
        console.log('i am useEffect')
        if(login.email !== undefined)
        {
            
        const name=login.email.split('@')        
        axios.get(`${name[0]}.json`)
        .then(response=>{
console.log(response)
if(response.data !== null){
            const sum=Object.keys(response.data).map(igkey=>{
                return response.data[igkey]
            })
        
setstate(sum)
        }
                    
        })   
        }
        
    }, [])

    return (
        <>
        
        <div style={{height:'auto',minHeight:'100vh'}}>
        {state.length<= 0? <h3 style={{padding:'20px 0 0 10px',color:"white"}}>Your Shopping Basket is Empty</h3> :<h3 style={{padding:'20px 0 0 10px',color:"white"}}>Your Shopping Basket</h3>}
            {

                state.length >=0 ?
                state.map((item)=>{
                    return(
                        <CheckOutPage image={item.imageUrl}
                        name={item.name}
                        price={item.price}
                        title={item.title}
                        description={item.description}
                        />
                    )
                })
                :
                <h3>Your Shopping card is empty</h3>
            }

        </div>
</>
    )
}

export default Checkout
