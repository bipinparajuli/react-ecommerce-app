import React from 'react'
import {Link} from 'react-router-dom'
import classes from './NavItems.module.css';
import {useStateValue} from '../../../../../container/StateProvider'
function NavbarItems(props) {
const[{login}]=useStateValue()
let logOut =null;
console.log(login)
if(login.state === true){
    logOut=(
        <Link className={classes.Items} to="./About" onClick={props.click} exject >Log Out</Link>  
    )
}


    return (
        <div className={classes.NavbarItems}>
            <Link className={classes.Items} to='./' onClick={props.click} exject >Home</Link>
      <Link className={classes.Items} to='./sell' onClick={props.click} exject >Sell</Link>
      <Link className={classes.Items} to="./About" onClick={props.click} exject >About Us</Link>
{logOut}    
        </div>
    )
}

export default NavbarItems
