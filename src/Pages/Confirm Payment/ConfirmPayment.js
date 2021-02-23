import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';

// import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import './ConfirmPayment.css'
import { HiOutlineCheck } from 'react-icons/hi';
import PurchaseCompleteAction from '../../Redux/Actions/Creators/PurchaseCompleteAction';


const ConfirmPayment = () => {
    let history = useHistory();

    const dispatch = useDispatch();

    const handleClick = () => {
        history.push("/");

        dispatch(PurchaseCompleteAction(false))
    }

    
    return (
        <div className='confirmPayment'>
            <div className="rounded-icon">
                <HiOutlineCheck className='checked'/>
            </div>
            
            <h2>Purchase Completed</h2>
            <small>please check your email for details concerning <br/> this transactin</small>
            <div className="linktag">
               <Link className='return' onClick={handleClick}>Return Home</Link>
            </div>
            
            
        </div>
    )
}

export default ConfirmPayment
