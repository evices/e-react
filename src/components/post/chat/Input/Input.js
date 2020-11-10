import React from 'react';

// import 'font-awesome/css/font-awesome.min.css';

import './Input.css';

export const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <div class="sl-input-group">
    <input 
        className="form-control sl-form-control sl-prepend"
        type="text" 
        placeholder="Type a message..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null }
    />
    <span class="input-group-btn">
        <button onClick={(e) => sendMessage(e)} class="btn sl-btn sl-btn-active sl-append"><i class="lnr lnr-arrow-right"></i></button>
    </span>
    </div>
    </form>
);