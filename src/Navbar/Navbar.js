import React from 'react'
import { Link, useHistory } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

   
    let history = useHistory();

    const handleFirstClick = () => {
        history.push("/");
    }
    const handleSecondClick = () => {
        history.push("/billingInfo");
    }
    const handleThirdClick = () => {
        history.push("/comfirmPayment");
    }
    return (
        <div className="purchase-form-navbar">
            <nav>
                <ul>
                    <li className=''> 
                        <Link className='firstLink '  onClick={handleFirstClick}>Personal Info</Link>
                    </li>
                    <li className=''>
                        <Link className='secondlink ' onClick={handleSecondClick} >Billing Info</Link>
                    </li>
                    <li className=''>
                        <Link className='thirdlink' onClick={handleThirdClick}>Comfirm Payment</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
