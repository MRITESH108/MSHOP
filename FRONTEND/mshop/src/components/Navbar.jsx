import React from 'react'
import { Link, NavLink } from 'react-router'
import '../styles/Navbar.css'
import profile from '../assets/profile.svg'
import header_cart from '../assets/header_cart.svg'
import Storeicon from '../assets/Store.svg'


const Navbar = () => {
    return (
        <div className='nav-box'>
            <div className='navbar-container'>
                <div className='navbar-searchimg'>
                    <img src="/" alt="MSHOP" />
                    <div className='nav-search'>
                        &#128269;
                        <input className='nav-searchbox' type="search" name="" id="nav-search" placeholder='Search For Products and More' />
                    </div>
                </div>
                <div className='navlink-box'>
                    <NavLink className='navlink'>
                            <img className='navlink-img' src={profile} alt="" />
                            <span className='navlink-text'>Login</span>
                    </NavLink>

                    <NavLink className='navlink'>
                        <img className='navlink-img' src={header_cart} alt="" />
                        <span className='navlink-text'>Cart</span>
                    </NavLink>

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
