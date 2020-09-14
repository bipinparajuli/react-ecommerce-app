import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Logo.module.css'
function Logo() {
    return (
        <div>
            <Link to='/'><strong className={classes.Logo}>LOGO</strong></Link>
        </div>
    )
}

export default Logo
