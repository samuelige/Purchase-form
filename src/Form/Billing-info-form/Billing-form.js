import React from 'react'
import InputField from '../../Components/Input/InputField'
import './Billing-form.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { change } from '../../Redux/Actions/Creators/FormActionCreator'
import Button from '../../Components/Custom-Button/Button'


const BillingForm = () => {
    const state = useSelector(state => state.formData)

    const dispatch = useDispatch() 

    const handleChange = (e) => {
        dispatch(change(e))
    }

    let history = useHistory();

    const handleClick = () => {
        history.push("/billingSecondPage");
    }
    return (
        <div className="form-properity">
            <form action="">
                <div className="name name-on-card">
                    <InputField name="nameOnCard" 
                    type='text'
                    sup="*"  
                    value={state.value} 
                    placeholder = "Opera Linus Ahmed"
                    onChange={handleChange} 
                    label="Name On Card" 
                    required/>
                </div>
            
                <div className="cardType">
                    <label className='label' htmlFor="">Card Type</label><sup className="supp">*</sup>
                    <select className= "select-cardType" name="cardType"  handleChange={handleChange}>
                        <option value={state.state}>Visa</option>
                        <option value={state.state}>Master Card</option>
                    </select>
                </div>

                <div className="details-date-cvv">
                    <div className="card-Details">
                        <InputField name="cardDetails" 
                        type='text' 
                        value={state.value}
                        handleChange={handleChange} 
                        sup="*" 
                        placeholder = "44960     44960      44960      44960"
                        label="Card details"
                        required/>
                    </div>
                    <div className="expiry-Date">
                        <InputField name="expiryDate" 
                        type='text' 
                        value={state.value}
                        handleChange={handleChange} 
                        sup="*" 
                        placeholder = "04 / 23"
                        label="Expiry date"
                        required/>
                    </div>
                    <div className="c-v-v">
                        <InputField name="cvv" 
                        type='text' 
                        value={state.value}
                        handleChange={handleChange} 
                        sup="*" 
                        placeholder = "923"
                        label="CVV"
                        required/>
                    </div>
                </div>

                <div className="first-billing-btn">
                    <Button className="next-btn"  type="button" onClick={handleClick}>Next</Button>
                    <Button type="button" className='cancle-payment-btn'>Cancel Payment</Button>
                </div>
            </form>
        </div>
    )
}

export default BillingForm
