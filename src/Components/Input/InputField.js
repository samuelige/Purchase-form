import React from 'react'
import './InputField.css'

const InputField = ({...otherprops}) => {
    return (
        <div className="input-field">
           <label htmlFor="" className="label">{otherprops.label}</label><sup className='sup'>{otherprops.sup}</sup>{ otherprops.br}
           <small className='sub-text'>{otherprops.subText}</small> { otherprops.br}
           <input {...otherprops} className= {otherprops.name}/>
        </div>
    )
}


export default InputField
