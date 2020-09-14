import React from 'react'
import classes from './Backdrop.module.css'

function Backdrop(props) {
    return (
    props.open?   <div className={classes.Backdrop} onClick={props.click}  >
            
        </div>:null
    )
}

export default Backdrop
