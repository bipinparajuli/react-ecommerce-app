import React,{useState} from 'react'
import { useStateValue } from '../../../../container/StateProvider'
import  './Cards.css';
import axios from '../../../../container/Server/axios'
import Modal from '../../Ui/Modal/Modal';
import {uuid} from 'uuidv4'
import { toast } from 'react-toastify';


function Cards(props) {
    // console.log(props)
    const [state,setState]=useState(false)
const [{login,backdrop},dispatch]=useStateValue();
// console.log('UUID' + uuid())

const showCardDetail=async ({name,price,description,phone,address,quality,location})=>{
await dispatch({
    type:'BACK_DROP_CARD_DETAIL',
    item:{
        state:true,
        name:name,
        price:price,
        description:description,
        phone:phone,
        address:address,
        quality:quality,
        location:location
    }
})
setState(true)
// console.log(state)
}

const modalCloseHandler=()=>{
    console.log(' iam in backdrop c')
    dispatch({
        type:'BACK_DROP_CARD_DETAIL',
        item:{
            state:false
        }
    })
}


const addToBasket=()=>{

    const name=login.email.split('@')
    console.log(name)
const uid=uuid();
    axios.post(`${name[0]}/${uid}.json`,{...props,uid} )

        .then(e=>{
            toast('Added to Basket',{type:'success'})
            dispatch({
                type:'ADD_TO_CART',
                item:{
                    id:uid
                }
            })
        })
        .catch(e=>alert(e))

}

    return (
<>
<Modal close={modalCloseHandler}  >
<h3>Here are the detail about the product</h3>
    <h4>{backdrop.name}</h4>
    <h5>Product Detail 👇</h5>
    <hr /><br />
    <p><strong>Description: </strong>{backdrop.description}</p>
    <p><strong>Product Price: </strong>{backdrop.price}</p>
    <p><strong>Product Owner Phone: </strong>{backdrop.phone}</p>
    <p><strong>Product location: </strong>{backdrop.address}</p>
    <p><strong>Product Quality: </strong>{backdrop.quality}</p>
</Modal>

            <div className="card text-center shadow">
<div className="ImageContainer">
                <img src={props.imageUrl} className='card-img-top' alt="..." />
                </div>
                <div className="card-body" >
                    <h5 className="card-title" >{props.name}</h5>
                    <p className="card-text"  >{props.price}</p>
                    <p><strong style={{color:"blueviolet",cursor:'pointer'}}   onClick={()=>showCardDetail(props)}>Show card detail</strong></p>
                    <button href="#"  disabled={!login.state} class="btn btn-primary" onClick={addToBasket} >Add to Card</button>
                </div>
            </div>  
  </>
    )
    
}

export default Cards
