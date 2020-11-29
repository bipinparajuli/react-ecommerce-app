import React from 'react'
import {Link} from 'react-router-dom'
import classes from './NavItems.module.css';
import {useStateValue} from '../../../../../container/StateProvider'
import {auth} from '../../../../../container/Server/Firebase'

function NavbarItems(props) {
const[{login,backdrop},dispatch]=useStateValue()
let logOut =null;

const logoutHandler=()=>{
auth.signOut().then(function() {
        alert('logOut success full')
        dispatch({
            type:'LOG_IN',
            item:{
                state:false,

            },
        })
      }, function(error) {
        alert(error)
      });
}

if(login.state === true){
    logOut=(
        <>
        <Link className={classes.Items} to={login.uid} onClick={backdrop.BackDropCloseHandler} exject >Sell</Link>
        <Link className={classes.Items} to="./" onClick={logoutHandler} onClick={logoutHandler} exject >Log Out</Link>  
        </>
        )
}
else{
    logOut=(
        <Link className={classes.Items} onClick={backdrop.BackDropCloseHandler} to="./sell"  exject >SignIn</Link>  
    )
}


    return (
        <div className={classes.NavbarItems}>
            <Link className={classes.Items} to='./' onClick={backdrop.BackDropCloseHandler} exject >Home</Link>
      <Link className={classes.Items} to="./About" onClick={backdrop.BackDropCloseHandler} exject >About Us</Link>
{logOut}    
        </div>
    )
}

export default NavbarItems
