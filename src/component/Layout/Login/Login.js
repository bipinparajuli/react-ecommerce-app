import React,{useState} from 'react'
import './Login.css'
import Logo from '../../Logo/Logo'
import Form from './Form/From'

function Login() {

    return (
        
        <div className="login_page">
            <Logo />
            <h3>You must sign-in before sell!</h3>
            <Form />
        </div>
    )
}

export default Login
