import React, { useState } from 'react'
import classes from './Layout.module.css'
import Navbar from './Navbar/Navbar'
import SideDrawer from '../Layout/Navbar/SideDrawer/SideDrawer'
import {useStateValue} from '../../container/StateProvider'

function Layout(props) {
    const[{},dispatch] = useStateValue()
    const[state,setstate]= useState(true)
    const BackDropCloseHandler=()=>{
    setstate((prevstate)=>{
 return !prevstate
    })
    dispatch({
        type:'BACK_DROP',
        item:{
            state,
            BackDropCloseHandler
        }
    })
}

    return (
        <>
           <Navbar click={BackDropCloseHandler} />
           {/* <SideDrawer click={BackDropCloseHandler} open={state} /> */}
    <main className={classes.content}>{props.children}</main>
        </>
    )
}

export default Layout
