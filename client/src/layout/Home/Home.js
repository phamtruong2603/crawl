import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import './home.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/reducer/reducerCounter';

const Home = () => {
    const user = useSelector((state) => state.userReducer.user)
    const counter = useSelector((state) => state.counterReducer.counter);
    const dispatch = useDispatch();
    const inc = () => {
        dispatch(increment(1))
    }
    const dec = () => {
        dispatch(decrement())
    }
   
    return (
        <div>
            <Header />
            <p>{counter}</p>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}

export default Home