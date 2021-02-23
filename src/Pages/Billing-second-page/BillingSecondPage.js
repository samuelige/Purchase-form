import React,  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Custom-Button/Button'
import PurchaseCompleteAction from '../../Redux/Actions/Creators/PurchaseCompleteAction';
import './BillingSecondPage.css'

const BillingSecondPage = () => {
    
    const successful_payment = useSelector(state => state.completed.purchase) 

    let history = useHistory();

    const dispatch = useDispatch();

    const handleClick = () => {
        history.push("/comfirmPayment");
        dispatch(PurchaseCompleteAction(true))
    }
    return (
       <div className="second-billing-container">
            <div className='billing-second-page'>
                <div className="catelogue-header">
                    <div className="items items1">Item Name</div>
                    <div className="items items2">&#8358; Price</div>
                </div>

                <div className="catelogue">
                    <div className="section1">
                        <h4 className="items items3">Data science and usability </h4>
                        <h4 className="items items4">50,000.00</h4>
                    </div>
                    <div className="section2">
                        <h4 className="items items5">Shipping </h4>
                        <h4 className="items items6">0.00</h4>
                    </div>
                    <hr/>
                    <div className="total">
                        <h5 className="items items7">Total</h5>
                        <h4 className="items items8">50,000.00</h4>
                    </div>
                </div>
            </div>
            <div className="billing-btn">
                <Button className="pay-btn"  type="button" onClick={handleClick}>Pay</Button>
                <Button type="button" className='cancle-btn'>Cancel Payment</Button>
            </div>

        </div>
    )
}

export default BillingSecondPage
