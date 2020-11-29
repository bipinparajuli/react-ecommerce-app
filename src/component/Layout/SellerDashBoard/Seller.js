import React from 'react'
import classes from './Seller.module.css'
import DashBoard from './Dasboard/DashBoard'

const Seller = (props) => {
    return (
        <div className={classes.DashBoard} style={{display:'flex'}}>
            <DashBoard />
    <div className={classes.DashBoardItem}>{props.children}</div>
        </div>
    )
}

export default Seller
