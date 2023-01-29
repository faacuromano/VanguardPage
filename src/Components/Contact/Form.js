import React, {useState} from 'react'

import './Form.css'


const Form = () => {

   const [valueName, setValueName] = useState("Nombre")
   const [valueLastName, setValueLastName] = useState("Apelllido")
   const [valueMail, setValueMail] = useState("Mail")
   const [valueMessage, setValueMessage] = useState("Mensaje")
    
    const inputHandler = (e) => {
        console.log(e.target.value)
    }

    const clearInputName = () => {
        setValueName(" ")
    }
    
    const clearInputLastName = () => {
        setValueLastName(" ")
    }

    const clearInputMail = () => {
        setValueMail(" ")
    }

    const clearInputMessage = () => {
        setValueMessage(" ")
    }

  return (
    <div>
    <div className='formContainer'>

        <label>Type your wallet</label>
        <input 
        type={"text"} 
        value={valueName} 
        className='inputForm' 
        onClick={clearInputName}>
        </input>

    </div>
    </div>
  )
}

export default Form