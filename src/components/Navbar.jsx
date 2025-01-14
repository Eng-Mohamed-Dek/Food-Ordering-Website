import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState('Home')

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img src='./logo.png' alt="" /></Link>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("Home")}> <Link to="/">Home</Link> {menu == 'Home' && <hr />} </li>
                <li onClick={() => setMenu("allfoods")}> <Link to="/allfoods">All Foods </Link>{menu == 'allfoods' && <hr />}</li>
                <li onClick={() => setMenu("Orders")}> <Link to="/orders">Orders</Link> {menu == 'Orders' && <hr />}</li>
            </ul>
            <div className="cart">
                <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            </div>
        </div>
    )
}

export default Navbar