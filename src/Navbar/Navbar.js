import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="purchase-form-navbar">
            <nav>
                <ul>
                    <li className='active'> 
                        <Link className='firstLink ' to="/" >Personal Info</Link>
                    </li>
                    <li className='active'>
                        <Link className='secondlink ' to="/billingInfo" >Billing Info</Link>
                    </li>
                    <li className='active'>
                        <Link className='thirdlink' to="/comfirmPayment">Comfirm Payment</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
