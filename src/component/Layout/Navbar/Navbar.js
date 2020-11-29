import React from 'react'
import NavbarItems from './Toolbar/NavbarItems/NavbarItems';
import classes from './Navbar.module.css'
import Logo from '../../Logo/Logo'
import DrawToggle from './SideDrawer/DrawToggle/DrawToggle'
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <>
<nav className={classes.navbar}>
    
    <div className={classes.Logo}>
    <Logo />
    </div>
       
      <input className="form-control mr-2" type="search" style={{width:'300px',height:'30px'}} placeholder="Search" aria-label="Search" />
      <div className={classes.DesktopOnly}>
      <NavbarItems props={props} />
      </div>
     <Link to="./checkout"><FaShoppingCart  style={{color:'white'}}/> </Link> 

      <div className={classes.DrawToggle}>
<DrawToggle click={props.click} />
    </div>
</nav>  
        </>
    )
}

export default Navbar
