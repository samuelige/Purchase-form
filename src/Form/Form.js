import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '../Components/Custom-Button/Button'
import InputField from '../Components/Input/InputField'
import { change } from '../Redux/Actions/Creators/FormActionCreator'
import './Form.css'

const Form = () => {
    const state = useSelector(state => state.formData)

    const dispatch = useDispatch() 

    const handleChange = (e) => {
        dispatch(change(e))
    }

    let history = useHistory();

    const handleClick = () => {
        history.push("/billingInfo");
    }
    

    return (
        <div className="personalinfo-form-container">
            <div className = "form-properity" >
                <form action="" >
                    <div className="name">
                        <InputField name="name" 
                        type='text' 
                        value={state.value} 
                        onChange={handleChange} 
                        label="Name" 
                        required/>
                    </div>

                    <div className="email">
                        <InputField name="email" 
                        type='email' 
                        value={state.value}
                        handleChange={handleChange} 
                        sup="*" 
                        subText='The purchase receipt would be sent to this address' 
                        label="Email Address"
                        required/>
                    </div>
                    
                    <div className="address1">
                        <InputField name="address1" 
                        type='text'
                        value={state.value} 
                        handleChange={handleChange} 
                        label="Address 1" 
                        required/>
                    </div>

                    <div className="address2">
                        <InputField name="address2" 
                        type='text'
                        value={state.value}
                        handleChange={handleChange} 
                        label="Address 2" 
                        required/>
                    </div>

                    <div className="LG-State">
                        <InputField name="localGovernment" 
                        type='text'
                        value={state.value}
                        handleChange={handleChange} 
                        label="Local Government" 
                        required/>

                        <div className="state">
                            <label className='label' htmlFor="">State</label>
                            <select className= "select-state" name="state"  handleChange={handleChange}>
                                <option value={state.state}>Lagos</option>
                                <option value={state.state}>Abuja</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div className="personalInfo-btn">
                <Button className="next-btn"  type="button" onClick={handleClick}>Next</Button>
                <Button type="button" className='cancle-payment-btn'>Cancel Payment</Button>
            </div>
        </div>
    )
}

export default Form
