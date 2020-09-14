import React from 'react'
import classes from './HomeUi.module.css'
import Image from '../../../../../src/Assets/lco.png'
import Form from '../../Login/Form/From'


function HomeUi() {
    return (
        <>
        <div className={classes.Heading}>
            <div className={classes.head}>
            <h1>Welcome to Kinbech Sansar</h1>
            <h2>Your Home for E-Commerce, Make Your life easy... 🛒🛒</h2>
            </div>
            <div className={classes.image}>
                <img src={Image} alt="none" />
                <div className={classes.Form}>
                <Form  />
                
                </div>
                
            </div>
            
        </div>
    
        </>
    )
}

export default HomeUi


