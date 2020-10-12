import React from 'react'

import './Input.css'
function Input({message,setMessage,sendMessage}) {
    return (    
        <form className="form">
            <input 
            className="input"
            type='text'
            placeholder='Enter the message...'
            value={message}
            onKeyPress={e=>e.key ==='Enter'? sendMessage(e):null}
            onChange={e=>setMessage(e.target.value)}
            
            />
            <button className='sendButton' onClick={e=>sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input
