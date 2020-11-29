import React,{useState} from 'react'
import {useStateValue} from '../../../../container/StateProvider'
import axios from '../../../../container/Server/axios'
import Logo from '../../../Logo/Logo'
import classes from './About.module.css'
import Select from 'react-select'
import {storage} from '../../../../container/Server/Firebase'
import { ToastContainer, toast } from 'react-toastify';
import SimpleDropZone from './DropZone/DropeZone'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

function About() {
const [state, setstate] = useState({selectedFile:null})
const [url, setUrl] = useState('')
const [name, setname] = useState('')
const [phone, setphone] = useState('')
const [description, setdescription] = useState('')
const [price, setprice] = useState('')
const [quality, setquality] = useState(false)
const [location, setlocation] = useState('')
const [type, settype] = useState('')
const [{basket},dispatch]=useStateValue();


//uploading an image to the storage

const onChangeHandler=(e)=>{
    setstate({
        selectedFile:e.target.files[0]
    })
    
    }
    

    
    async function fileUploadHandler(){
setquality(true)
if(state.selectedFile !== null){
    const uploadTask= storage.ref(`images/${state.selectedFile.name}`).put(state.selectedFile);
    uploadTask.on(
    "state_changed",
    snapshot =>{},
    error=>{
        
        toast(error,{type:'error'})
    },
    ()=>{
        storage
        .ref('images')
        .child(state.selectedFile.name)
        .getDownloadURL()
        .then(url =>{
            setUrl(url)
            toast('Image Uploaded',{type:"info"})
        setquality(false)
        })
    }
)
}
 else{
    toast('No file selected',{type:"warning"})
    setquality(false)
 }    
    
    }
    


    const onFormSubmit=(e)=>{
console.log(type)
        e.preventDefault()
        console.log(name,phone,location,type,price)
         const order=  { 
            name,
            phone,
            price,
            description,
            imageUrl:url,
            type,
            quality:e.target.elements.quality.value,
            location
        }
console.log(order.imageUrl)
if(order.imageUrl !== ''){
    axios.post(`${order.type}.json`, order)

        .then(e=>{
    return(        
    toast('Successfully Added Your Product'),{type:"success"},
    setname(''),
    setphone(''),
    setprice(''),
    settype(''),
    setlocation(''),
    setdescription(''))
    })
        .catch(e=>alert(e))

}
else{
    toast('Image is Uploading...',{type:"error"})
}
    
        //Add item to the basket
dispatch({
    type:"ALL",
    item: { 
        name,
        phone,
        price,
        description,
        imageUrl:url,
        type,
        quality:e.target.elements.quality.value,
        location
    }
})

    }


    const options = [
        { value: 'Electronic', label: 'Electronic' },
        { value: 'Grossery', label: 'Grossery' },
        { value: 'Others', label: 'Others' },
        { value: 'Hardware', label: 'Hardware' },
        { value: 'Assosories', label: 'Assosories' },
        { value: 'Furniture', label: 'Furniture' },
      ]

      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? 'red' : 'blue',
          padding: 20,
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 200,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    return (
        <>
    <form onSubmit={onFormSubmit}>
  <strong>Product Name: </strong>   <input type='text' value={name} onChange={(e)=>setname(e.target.value)}  required name='product' placeholder="Enter your product name"  />
    <strong>Enter Your Verified Phone Number: </strong><input  type="number" value={phone} onChange={(e)=>setphone(e.target.value)}  required name='phone' placeholder="Enter Phone Number" />
     <strong>Product Image:  </strong><input type="file" onChange={onChangeHandler} /> {quality? 
    //  <Loader    type="Bars" color="#00BFFF"height={50}width={50}text='Uploading'  />
    <button style={{opacity:'0.5'}} onClick={fileUploadHandler}>Uploading Please Wait ...</button>
     :<button onClick={fileUploadHandler}>Upload</button>}
     {/* <SimpleDropZone /> */}
        <strong>Enter Price: </strong> <input  type="number" value={price} onChange={(e)=>setprice(e.target.value)}  required name='price' placeholder="Enter Price" />
    <strong>Product Description: </strong><textarea name="textarea" value={description} onChange={(e)=>setdescription(e.target.value)} />
    <strong>Product Quality: </strong>
<div style={{display:'flex'}}> 
   <input style={{margin:'5px 10px 5px 0 '}} type="radio" value="Excellent" name='quality'   /> Excellent
    <input style={{margin:'5px 10px'}}  name='quality' type="radio"  value="Good" /> Good 
    <input style={{margin:'5px 10px'}} name='quality' type="radio"  value="Medium" /> Medium 
    <input style={{margin:'5px 10px'}} name='quality' type="radio" value="Bad" /> Low
    
</div>
<strong>Product Location: </strong>   <input type='text' value={location} onChange={(e)=>setlocation(e.target.value)} required name='location' placeholder="Enter your product location"  />
    <strong>Select Your Product Type: </strong>
    <Select 
     styles={customStyles}
    placeholder={type}
    options={options}
    value={type}
    onChange={(e)=>settype(e.value)}
      />
    
    <br />
    <button>Submit</button>
</form>

        </>
    )
}

export default About


