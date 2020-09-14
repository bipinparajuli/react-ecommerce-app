import React,{useState} from 'react'
import {useStateValue} from '../../../../container/StateProvider'
import axios from '../../../../container/Server/axios'
import Logo from '../../../Logo/Logo'
import classes from './About.module.css'
import {storage} from '../../../../container/Server/Firebase'


function About() {
const [state, setstate] = useState({selectedFile:null})
const [url, setUrl] = useState(null)
const [{basket},dispatch]=useStateValue();


//uploading an image to the storage

const onChangeHandler=(e)=>{
    setstate({
        selectedFile:e.target.files[0]
    })
    
    }
    

    
    async function fileUploadHandler(){

        const uploadTask=storage.ref(`images/${state.selectedFile.name}`).put(state.selectedFile);
        uploadTask.on(
        "state_changed",
        snapshot =>{},
        error=>{
            
            console.log(error)
        },
        ()=>{
            storage
            .ref('images')
            .child(state.selectedFile.name)
            .getDownloadURL()
            .then(url =>{
                console.log(url)
setUrl(url)
            })
        }
    )
    
    }
    

    const onFormSubmit=(e)=>{

        e.preventDefault()
        alert(url)
        const order={
            name:e.target.elements.product.value,
            number:e.target.elements.phone.value,
            price:e.target.elements.price.value,
            textarea:e.target.elements.textarea.value,
            imageUrl:url,
            select:e.target.elements.select.value,
            quality:e.target.elements.quality.value,
            location:e.target.elements.location.value
        }
console.log(order.quality)

        axios.post(`${order.select}.json`, order)

        .then(e=>console.log('SuccessFull'))
        .catch(e=>alert(e))

        //Add item to the basket
dispatch({
    type:"ALL",
    item:{
        name:e.target.elements.product.value,
        number:e.target.elements.phone.value,
        price:e.target.elements.price.value,
        imageUrl:url,
        textarea:e.target.elements.textarea.value,
        select:e.target.elements.select.value,
        quality:e.target.elements.quality.value,
        location:e.target.elements.location.value
    }
})

    }

    return (
        <>
    <form onSubmit={onFormSubmit}>
  <strong>Product Name 👇</strong>   <input type='text' required name='product' placeholder="Enter your product name"  />
    <strong>Enter Your Verified Phone Number 👇</strong><input  type="number"  required name='phone' placeholder="Enter Phone Number" />
    <strong>Product Image 👇 </strong><input type="file" onChange={onChangeHandler} /> <button onClick={fileUploadHandler}>Upload</button>
        <strong>Enter Price 👇</strong> <input  type="number"  required name='price' placeholder="Enter Price" />
    <strong>Product Description 👇</strong><textarea name="textarea" />
    <strong>Product Quality 👇</strong>
<div style={{display:'flex'}}> 
   <input style={{margin:'5px 10px 5px 0 '}} type="radio" value="Excellent" name='quality'   /> Excellent
    <input style={{margin:'5px 10px'}}  name='quality' type="radio"  value="Good" /> Good 
    <input style={{margin:'5px 10px'}} name='quality' type="radio"  value="Medium" /> Medium 
    <input style={{margin:'5px 10px'}} name='quality' type="radio" value="Bad" /> Low
    
</div>
<strong>Product Location 👇</strong>   <input type='text' required name='location' placeholder="Enter your product location"  />
    <strong>Select Your Product Type 👇</strong><select name="select">
        <option>Electronic</option>
        <option>Assories</option>
        <option>Hardware</option>
        <option>Grossery</option>
        <option>Furniture</option>
        <option>Others</option>
    </select><br />
    <button>Submit</button>
</form>

        </>
    )
}

export default About


