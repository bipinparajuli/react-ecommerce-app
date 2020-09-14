import React from 'react'
import classes from './SideDrawer.module.css'
import Backdrop from '../../Ui/Backdrop/Backdrop'
import NavbarItems from '../Toolbar/NavbarItems/NavbarItems';
import Logo from '../../../Logo/Logo'
function SideDrawer(props) {

let attachclass=[classes.SideDrawer,classes.close];
if(props.open){
    attachclass=[classes.SideDrawer,classes.open];
}

    return (
        <>
        <Backdrop click={props.click} open={props.open}/>  
        <div className={attachclass.join(' ')}>
        <Logo />
          <NavbarItems  click={props.click} />
        </div>
        </>
    )
}

export default SideDrawer
