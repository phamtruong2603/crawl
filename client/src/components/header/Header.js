import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ user }) => {
    const logout = () => {
        window.open("http://localhost:3001/v1/auth/logout", "_self")
    }
    return (
        <div>
            <div className='header'>
                <span className='logo'>APP</span>
                {user ? (
                    <ul className='list'>
                        <li className='listItem'>
                            <img src={user.photos[0].value}
                                alt='' className='avatar'
                            />
                        </li>
                        <li className='listItem'>{user.displayName || user.username}</li>
                        <Link to='/' onClick={logout}>Logout</Link>
                    </ul>
                ) : (
                    <Link to='/login'>Login</Link>
                )}

            </div>
        </div>
    )
}

export default Header