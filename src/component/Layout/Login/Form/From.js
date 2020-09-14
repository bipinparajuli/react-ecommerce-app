import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {auth} from '../../../../container/Server/Firebase'
import classes from './Form.module.css'
import {useStateValue} from '../../../../container/StateProvider'
import { Spinner } from 'reactstrap'
import Backdrop from '../../Ui/Backdrop/Backdrop'

function From() {

const[{},dispatch]=useStateValue()


    const history=useHistory();
    
    const [loading,setloading]=useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    let loader;
    const login=(e)=>{
        setloading(true)
        e.preventDefault();
        //do the login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //login in, redirect to Seller page
            if(loading){
                loader=(
                <Backdrop open={true}>
                <Spinner />
                </Backdrop>)
                     }
            dispatch({
                type:'LOG_IN',
                item:{
                    state:true,
                    email
                },
            })
setloading(false)
            history.push('/about')
        })
        .catch((e)=>alert(e.message + auth))
    }
    
    const register=(e)=>{
    e.preventDefault();
    //do the register logic
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        history.push('/about')
    })
    .catch((e)=>alert(e.message))
    }

    return (

<div>
{loader}
            <div className={classes.form}>
<h1>Sign in </h1>
<h5>E-mail</h5>
<input value={email} onChange={(e=>{setEmail(e.target.value)})}  className={classes.email} type="email" />
<h5>Password</h5>
<input value={password} onChange={(e=>{setPassword(e.target.value)})}   className={classes.password} type="password" />
<button onClick={login} type="submit" className={classes.signInButton}>Sign in </button>
                <p>By signing in you agree to the terms and condition of use and state.</p>
                <button onClick={register} >Create New Account</button>
                </div>

        </div>
        
    )
}

export default From
