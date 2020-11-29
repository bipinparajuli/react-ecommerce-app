import React from 'react'
import {Link} from 'react-router-dom'
import classes from './DashBoard.module.css'
import Sell from '../Sell/Sell'
import {useStateValue} from '../../../../container/StateProvider'
function DashBoard(props) {
    const [{login}]=useStateValue()
    return (
        <>
        
        <div className={classes.DashBoard}>
            <Link to='./sellerdashboardhome' >DashBoard</Link>
            <Link to={login.uid}>Sell</Link>
        </div>
        </>
    )
}

export default DashBoard
