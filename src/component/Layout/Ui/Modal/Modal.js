import React, { Children } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css'
import {useStateValue} from '../../../../container/StateProvider'
function Modal(props) {
    const [{backdrop},dispatch]=useStateValue()
    console.log(backdrop.state)
    return (
<>
<Backdrop open={backdrop.state} click={props.close} />
        <div className={classes.Modal} style={{transform:backdrop.state ? 'translateY(0)' : 'translate(-100vh)',opacity:backdrop.state? "1" : '0'}} >
          {props.children}
        </div>
  </>
    )
}

export default Modal
