import React, { Children } from 'react'
import './Button.css'

const Button = ({children, ...otherprops}) => {
    return (
       <button {...otherprops}>{children}</button>
    )
}

export default Button
