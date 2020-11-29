import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {auth} from '../../../../container/Server/Firebase'
import classes from './Form.module.css'
import {useStateValue} from '../../../../container/StateProvider'
import Spinner from '../../Ui/Spinner/Spinner'
import Backdrop from '../../Ui/Backdrop/Backdrop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {uuid} from 'uuidv4'

function From() {

const[{},dispatch]=useStateValue()


    const history=useHistory();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [state,setstate]=useState(false)
   
    let formTable
    
    const login=(e)=>{

        e.preventDefault();
        //do the login logic
            setstate(true)
                 
        
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            toast('Login Successfull' + email,{type:'success'})    
            //login in, redirect to Seller page
      const uid=uuid()      
            dispatch({
                type:'LOG_IN',
                item:{
                    state:true,
                    email,
                    uid:'/'+uid
                },
            })
            history.push(`./${uid}`)
        })
        .catch((e)=>{alert(e)
            setstate(false)
setPassword('')
setEmail('')
        })
    }
    
    const register=(e)=>{
setstate(true)
        e.preventDefault();
    //do the register logic
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        toast('Successfully created ' + email)
        setstate(false)
        setEmail('')
        setPassword('')
        history.push('/')
    })
    .catch((e)=>{alert(e)
    setstate(false)
setPassword('')
setEmail('')})
    }


if(state){
    formTable=(<>
        <Spinner />
        </>)
}
else{
 formTable=(<div className={classes.form}>
    <h1>Sign in </h1>
    <h5>E-mail</h5>
    <input value={email} onChange={(e=>{setEmail(e.target.value)})}  className={classes.email} type="email" />
    <h5>Password</h5>
    <input value={password} onChange={(e=>{setPassword(e.target.value)})}   className={classes.password} type="password" />
    <button onClick={login} type="submit" className={classes.signInButton}>Sign in </button>
                    <p>By signing in you agree to the terms and condition of use and state.</p>
                    <button onClick={register} >Create New Account</button>
                    <p>Simply Create new Account by typing email,password and clicking to Create New Account Button</p>
                    </div>);
}
    
    return (

<div>
{formTable}
</div>
        
    )
}

export default From
