import React,{useEffect,useState} from 'react'
import classes from './Card.module.css'
import axios from '../../../container/Server/axios'
import {useStateValue} from '../../../container/StateProvider'
import Cards from './Cards/Cards'

function Card () {
    const [state, setstate] = useState()
    const [Assories, setAssories] = useState()
    const [Hardware, setHardware] = useState()
    const [Others, setOthers] = useState()
    const [Grossery,setGrossery]=useState()
    const [Furniture,setFurniture]=useState()

 
    useEffect( () => {

 const obj=['Electronic.json',"Hardware.json",'Assories.json','Furniture.json','Grossery.json',"Others.json"]
 
 for(let i in obj){
     if(obj[i] === 'Electronic.json'){
     
        axios.get("Electronic.json")
        .then(response=>{
if(response.data == null){
    return state
}
else{
    const sum=Object.keys(response.data).map(igkey=>{
        return response.data[igkey]
    })
    setstate(sum)

}
           
                    
        })
        
     }
    //  console.log()

     if(obj[i] === "Hardware.json"){
     
        axios.get("Hardware.json")
        .then(response=>{
if(response.data == null){
    return state
}
else{
    const sum=Object.keys(response.data).map(igkey=>{
        return response.data[igkey]
    })
setHardware(sum)

}
           
                    
        })
        
     }
     if(obj[i] === "Furniture.json"){
     
        axios.get("Furniture.json")
        .then(response=>{
if(response.data == null){
    return state
}
else{
    const sum=Object.keys(response.data).map(igkey=>{
        return response.data[igkey]
    })
setFurniture(sum)

}
           
                    
        })
        
     }

     
     if(obj[i] === "Assories.json"){
     
        axios.get("Assories.json")
        .then(response=>{
if(response.data == null){
    return state
}
else{
    const sum=Object.keys(response.data).map(igkey=>{
        return response.data[igkey]
    })
setAssories(sum)

}
           
                    
        })
        
     }

     
     if(obj[i] === "Grossery.json"){
     
        axios.get("Grossery.json")
        .then(response=>{
if(response.data == null){
    return state
}
else{
    const sum=Object.keys(response.data).map(igkey=>{
        return response.data[igkey]
    })
setGrossery(sum)

}
           
                    
        })
        
     }
     
     
     if(obj[i] === "Others.json"){
     
        axios.get("Others.json")
        .then(response=>{
if(response.data == null){
    return state
}
else{
    const sum=Object.keys(response.data).map(igkey=>{
        return response.data[igkey]
    })
setOthers(sum)

}
           
                    
        })
        
     }


 }


        
    }, [])



    

        return (
            <>
            {
            state?.length <= 0 ?(
                <div>
                    <h2>Our Shopping card is empty</h2>
                </div>
            ):(
                <div>
                    <h2 style={{textAlign:'center',color:'white'}}>Available List of Cards</h2>
                    <div className={classes.row}>
                                <div className={classes.container}>
                                
                                {
                                    
                                    state?.map((item,i)=>{
              
                                        return (

                        
                                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                                    {i == 0?<h3 style={{color:'white',margin:'20px 10px',display:'block'}}>{item.type}</h3>:<div style={{marginTop:'19%'}}></div>}
                                       <Cards
                                                        name={item.name}
                                                        description={item.description}
                                                       price={item.price} 
                                                       imageUrl={item.imageUrl}
                                                        title={item.type}
                                                        phone={item.phone}
                                                        address={item.location}
                                                        quality={item.quality}
                                            />
                                                </div>
                                        )
                                        
                                    })
                                }
                     </div>
                     <div className={classes.container}>

                     
{
                       
                        Hardware?.map((item,i)=>{
                            return(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
{i == 0?<h3 style={{color:'white',margin:'10px 15px'}}>{item.type}</h3>:<div style={{marginTop:'19%'}}></div>}
                                <Cards
                                                        name={item.name}
                                                        description={item.description}
                                                       price={item.price} 
                                                       imageUrl={item.imageUrl}
                                                        title={item.type}
                                                        phone={item.phone}
                                                        address={item.location}
                                                        quality={item.quality}
                                                        />
                                    </div>
                            )
                            
                        })
                    }
                    </div>
                    <div className={classes.container}>

                    
{
                       
                        Furniture?.map((item,i)=>{
                            return(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    {i == 0?<h3 style={{color:'white',margin:'10px 15px'}}>{item.type}</h3>:<div style={{marginTop:'19%'}}></div>}            
                                <Cards
                                                        name={item.name}
                                                        description={item.description}
                                                       price={item.price} 
                                                       imageUrl={item.imageUrl}
                                                        title={item.type}
                                                        phone={item.phone}
                                                        address={item.location}
                                                        quality={item.quality}
                                                        />
                                    </div>
                            )
                            
                        })
                    }
                    
                    </div>

                    <div className={classes.container}>
                    
{
                       
                        Assories?.map((item,i)=>{
                            return(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    {i == 0?<h3 style={{color:'white',margin:'10px 15px'}}>{item.type}</h3>:<div style={{marginTop:'19%'}}></div>}           
                                <Cards
                                                        name={item.name}
                                                        description={item.description}
                                                       price={item.price} 
                                                       imageUrl={item.imageUrl}
                                                        title={item.type}
                                                        phone={item.phone}
                                                        address={item.location}
                                                        quality={item.quality}
                                                        />
                                    </div>
                            )
                            
                        })
                    }
                    
                    </div>


                    <div className={classes.container}>

                    
{
                       
                        Grossery?.map((item,i)=>{
                            return(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    {i == 0?<h3 style={{color:'white',margin:'10px 15px'}}>{item.type}</h3>:<div style={{marginTop:'19%'}}></div>}            
                                <Cards
                                                        name={item.name}
                                                        description={item.description}
                                                       price={item.price} 
                                                       imageUrl={item.imageUrl}
                                                        title={item.type}
                                                        phone={item.phone}
                                                        address={item.location}
                                                        quality={item.quality}
                                                       />
                                    </div>
                            )
                            
                        })
                    }
                    
                    </div>

                    <div className={classes.container}>
                    
{
                       
                        Others?.map((item,i)=>{
              
                            console.log( item)    
              return(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}> 
                    {i == 0?<h3 style={{color:'white',margin:'10px 15px'}}>{item.type}</h3>:<div style={{marginTop:'19%'}}></div>}           
                                <Cards
                                                        name={item.name}
                                                        description={item.description}
                                                       price={item.price} 
                                                       imageUrl={item.imageUrl}
                                                        title={item.type}
                                                        phone={item.phone}
                                                        address={item.location}
                                                        quality={item.quality}
                                                        />
                                    </div>
                            )
                            
                        })
                    }
                    
                    </div>


</div>
                </div>
            )
        }
            </>
        )
        }


export default Card
