import React, { useState } from 'react';
import './login.css'
import Facebook from '../../img/facebook.png'
import Google from '../../img/google.png'
import Github from '../../img/github.png'
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../redux/reducer/userReducer';
import { Navigate } from 'react-router-dom';
import { login, loginToken, changeUser } from '../../redux/reducer/userReducer';
import axios from 'axios';

const Login = () => {
    const isLogin = useSelector((state) => state.userReducer.isLogin)
    const dispatch = useDispatch();
    const google = async () => {
        window.open("http://localhost:3001/v1/auth/google", "_self")
    }
    const github = () => {
        window.open("http://localhost:3001/v1/auth/github", "_self")
    }
    const facebook = () => {
        window.open("http://localhost:3001/v1/auth/facebook", "_self")
    }

    if (isLogin) {
        return <Navigate to="/test" replace />
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(login())
    }

    return (
        <div className='login'>
            <h1 className='titleLogin'>Choose a Login Method</h1>
            <div className='wrapperLogin'>
                <div className='leftLogin'>
                    <div className='loginButton google' onClick={google}>
                        <img
                            src={Google}
                            alt='' className='iconLogin'
                        />
                        Google
                    </div>
                    <div className='loginButton facebook' onClick={facebook}>
                        <img
                            src={Facebook}
                            alt='' className='iconLogin'
                        />
                        Facebook
                    </div>
                    <div className='loginButton github' onClick={github}>
                        <img
                            src={Github}
                            alt='' className='iconLogin'
                        />
                        Github
                    </div>
                </div>
                <div className='centerLogin'>
                    <div className='lineLogin' />
                    <div className='orLogin'>OR</div>
                </div>
                <div className='rightLogin'>
                    <form onSubmit={submit}>
                        <input type='text' placeholder='usename' />
                        <input type='password' placeholder='password' />
                        <button type="submit" >Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login