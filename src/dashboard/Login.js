import React, { useRef } from 'react';
import { auth } from '../Firebase';
import './Login.css';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <div>
                <input type="email" ref={emailRef} />
                <input type="password" ref={passwordRef} />
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;
