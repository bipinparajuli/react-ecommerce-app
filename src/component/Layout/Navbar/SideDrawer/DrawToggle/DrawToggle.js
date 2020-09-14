import React from 'react'
import classes from './DrawToggle.module.css'

function DrawToggle(props) {
    return (
        <div className={classes.DrawToggle} onClick={props.click} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawToggle
