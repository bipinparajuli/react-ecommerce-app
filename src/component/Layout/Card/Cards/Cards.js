import React,{useState} from 'react'
import { useStateValue } from '../../../../container/StateProvider'
import  './Cards.css';
import axios from '../../../../container/Server/axios'
import {auth} from '../../../../container/Server/Firebase'
import {Link} from 'react-router-dom'
import Modal from '../../Ui/Modal/Modal';



function Cards(props) {
    console.log(props)
    const [state,setState]=useState(false)
const [{login,backdrop},dispatch]=useStateValue();
console.log(backdrop)

const showCardDetail=(props)=>{
    console.log(props)
dispatch({
    type:'BACK_DROP_CARD_DETAIL',
    item:{
        state:true,
        name:props.name,
        price:props.price,
        description:props.description,
        phone:props.phone,
        address:props.address,
        quality:props.quality,
        location:props.location
    }
})
setState(true)
console.log(state)
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

    axios.post(`${name[0]}.json`,props )

        .then(e=>console.log('SuccessFull'))
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
    <p><strong>Product location: </strong>{backdrop.location}</p>
    <p><strong>Product Quality: </strong>{backdrop.quality}</p>
</Modal>

            <div className="card text-center shadow">
<div className="ImageContainer">
                <img src={props.imageUrl} className='card-img-top' alt="..." />
                </div>
                <div className="card-body" style={{cursor:'pointer'}}>
                    <h5 className="card-title" >{props.name}</h5>
                    <p className="card-text"  >{props.price}</p>
                    <strong style={{color:"blueviolet",cursor:'pointer'}} onClick={()=>showCardDetail(props)}>Show card detail</strong>
                    <button href="#"  disabled={!login.state} class="btn btn-primary" onClick={addToBasket} >Add to Card</button>
                </div>
            </div>  
  </>
    )
    
}

export default Cards
