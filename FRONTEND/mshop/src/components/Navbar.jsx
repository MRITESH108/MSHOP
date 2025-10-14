import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import '../styles/Navbar.css'
import profile from '../assets/profile.svg'
import header_cart from '../assets/header_cart.svg'
import Storeicon from '../assets/Store.svg'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {items} = useSelector((state) => state.cart)
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const name = localStorage.getItem('username');
        if (name) {
            setUsername(name);
        }
    }, [username]);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5000/logout', {}, {
                withCredentials: true
            });
            localStorage.removeItem('username');
            setUsername(null);
            alert('Logout successful');
            window.location.href = '/';

        } catch (err) {
            console.log('Logout error:', err);
            alert('Logout failed');
        }
    };
    return (
        <div className='nav-box'>
            <div className='navbar-container'>
                <div className='navlink navlink-login'>
                    <div className='navbar-searchimg'>
                        {/* PROFILE IMAGE OR LOGO SECTION  */}
                        <NavLink to='/' style={{color: 'inherit', textDecoration: 'none', background:'transparent'}}>
                        <img src="/" alt="MSHOP" />
                        </NavLink>
                        {/* SEARCH BOX SECTION  */}
                        <div className='nav-search'>
                            &#128269;
                            <input className='nav-searchbox' type="search" name="" id="nav-search" placeholder='Search For Products and More' />
                        </div>
                    </div>
                </div>
                <div className='navlink-box'>
                    {/* LOGIN - SECTION */}
                    <div className='login-wrapper'>
                        <NavLink to='/login' className='navlink navlink-login'>
                            <img className='navlink-img' src={profile} alt="" />
                            <span className='navlink-text'>Login</span>

                        </NavLink>
                        <div className='dropdown-login'>
                            <div className='logincontent1'>
                                {username ? (
                                    <span>Hi, {username}</span>
                                ) : (
                                    <>
                                        <span>New customer?</span>
                                        <NavLink className='nav-signup' to='/signup'>SignUp</NavLink>
                                    </>
                                )}
                            </div>
                            <div className='logincontent2'>
                                <span>My Profile</span>
                                <span>Orders</span>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                                {/* CART SECTION */}
                    <NavLink to='/cart' className='navlink'>
                        <img className='navlink-img' src={header_cart} alt="" />
                        <span className='cartcount'>{items.length}</span>
                        <span className='navlink-text'>Cart</span>
                    </NavLink>
                                {/* BECOME SELLER SECTION  */}
                    <NavLink className='navlink'>
                        <img className='navlink-img' src={Storeicon} alt="" />
                        <span className='navlink-text'>Become a seller</span>
                    </NavLink>
                </div>

            </div>

        </div>
    )
}

export default Navbar