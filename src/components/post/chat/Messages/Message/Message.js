import React from 'react';

import ReactEmoji from 'react-emoji'

import './Message.css';

export const Message = ({message: { user, text }, name}) => {
    let isSentByCurrentUser = false;
    
    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName) {
        isSentByCurrentUser = true
    }
    return (
    isSentByCurrentUser
    ? (
        <div class="direct-chat-msg right">
            <div class="direct-chat-info clearfix">
                <span class="direct-chat-name pull-right">{trimmedName}</span>
                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
            </div>
            <div class="direct-chat-text">
            {ReactEmoji.emojify(text)}
            </div>
        </div>
    )
    : (
            <div class="direct-chat-msg">
                <div class="direct-chat-info clearfix">
                <span class="direct-chat-name pull-left">{user}</span>
                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                </div>
                <div class="direct-chat-text">
                {text}
                </div>
            </div>
        ) 
    )

};