import React,{useEffect,useState} from 'react'
import CheckOutPage from './CheckOutPage/CheckOutPage'
import axios from '../../container/Server/axios'
import {useStateValue} from '../../container/StateProvider'
import { uuid } from 'uuidv4';

function Checkout() {
const [{login}] = useStateValue();

    const [state, setstate] = useState([]);
    
    useEffect(() => {
        if(login.email !== undefined)
        {
            
        const name=login.email.split('@')        
        axios.get(`${name[0]}.json`)
        .then(response=>{
// console.log(response.data)
if(response.data !== null){
            const sum=Object.keys(response.data).map(igkey=>{
                return response.data[igkey]
            })
            // console.log(sum)
setstate(sum)
        }
                    
        })   
        }
        
    }, [state])

const removeFromBasketHandler=(id)=>{
    console.log('REMOVE FORM CARD' + id)
    const name=login.email.split('@')
    if(window.confirm('Are You Sure Do You Want To Delet?')){
    axios.delete(`https://cors-anywhere.herokuapp.com/https://e-commerce-app-b19e5.firebaseio.com/${name[0]}/${id}.json`)
   .then(()=>{
   })

   .catch((e)=>{
    alert(e)
   })
}
}

    return (
        <>
        
        <div style={{height:'auto',minHeight:'100vh'}}>
        {state.length<= 0? <h3 style={{padding:'20px 0 0 10px',color:"white",position:"absolute",top:"40%",left:"35%",fontWeight:"bold"}}>Your Shopping Basket is Empty</h3> :<h3 style={{padding:'20px 0 0 10px',color:"white"}}>Your Shopping Basket</h3>}
            {

                state.length >=0 ?
                state.map((item)=>{
                    return(
                        // console.log(Object.values(item)[0].title),
                        <CheckOutPage image={Object.values(item)[0].imageUrl}
                        name={Object.values(item)[0].name}
                        price={Object.values(item)[0].price}
                        title={Object.values(item)[0].title}
                        description={Object.values(item)[0].description}
                        click={()=>removeFromBasketHandler(Object.values(item)[0].uid)}
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
