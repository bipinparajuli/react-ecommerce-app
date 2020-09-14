import React from 'react'
import {Link} from 'react-router-dom'
import classes from './DashBoard.module.css'
import Sell from '../Sell/Sell'
function DashBoard() {
    return (
        <>
        <header>
        <div className={classes.DashBoard}>
            <h1></h1>
            <Link >DashBoard</Link>
            <Link to="./sell/user">Sell</Link>
        </div>
        <Sell />
        </header>
        </>
    )
}

export default DashBoard
