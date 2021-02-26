import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '../Components/Custom-Button/Button'
import InputField from '../Components/Input/InputField'
import { change } from '../Redux/Actions/Creators/FormActionCreator'
import './Form.css'
import '../Components/Input/InputField.css'

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
                        placeholder = "Opera Linus Ahmed"
                        classname="input-field"
                        otherClassName= 'name-container'
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
                        placeholder = "OperaLinusAhmed@devmail.com"
                        classname="input-field"
                        otherClassName= 'email-container'
                        required/>
                    </div>
                    
                    <div className="address1">
                        
                        <InputField name="address1" 
                        type='text'
                        value={state.value} 
                        handleChange={handleChange} 
                        label="Address 1" 
                        placeholder = "The address of the user goes here"
                        classname="input-field"
                        otherClassName= 'firstAddress-container'
                        required/>
                    </div>

                    <div className="address2">
                        <InputField name="address2" 
                        type='text'
                        value={state.value}
                        handleChange={handleChange} 
                        label="Address 2" 
                        placeholder = "ande here"
                        classname="input-field"
                        otherClassName= 'secondAddress-container'
                        required/>
                    </div>

                    <div className="LG-State">
                        <div className="LG">
                            <label htmlFor="" className='label'>local Government</label>
                            <input type="text" 
                            name="localGovernment"
                            className= "localGovernment"
                            value={state.value}
                            handleChange={handleChange} 
                            label="Local Government" 
                            placeholder = "Surulere"
                            classname="input-field"
                            otherClassName= 'thirdAddress-container'
                            required
                            />
                        </div>

                        <div className="state">
                            <label className='label label-state' htmlFor="">State</label>
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
