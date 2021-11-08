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
            <div>
                <ul className="adminNav_list">
                    <li>
                        <a href="/">Home</a>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                </ul>
            </div>
            <div className="signUp">
                <h1>Login</h1>
                <div className="login__auth">
                    <input type="email" ref={emailRef} />
                    <input type="password" ref={passwordRef} />
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
