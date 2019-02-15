import React from 'react'
import './errorMessage.css'

const ErrorMessage = ({error, errorText, errorMessage}) => {
    return(
        <div className={error}>
            <p className={errorText}>{errorMessage}</p>
        </div>
    )
}

export default ErrorMessage;