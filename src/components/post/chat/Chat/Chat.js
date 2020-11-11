import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";


// import {InfoBar} from '../InfoBar/InfoBar';
import {Input} from '../Input/Input';
import {Messages} from '../Messages/Messages';
// import {TextContainer} from '../TextContainer/TextContainer'

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://tquyr.sse.codesandbox.io/';

  console.log(location);
  useEffect(() => {
    const { name, room } = {name: location.name, room: location.room};

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(msgs => [ ...msgs, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }


  return (
    
    // <div class="container">
    //   <div class="row bootstrap snippets bootdeys">
        <div class="col-md-3 real-time-chat">
          <div class="box box-primary direct-chat direct-chat-primary">
            <div class="box-header with-border">
              <h3 class="box-title">{room}</h3>
              
            </div>
            <div class="box-body">
              <div class="direct-chat-messages">
                <Messages messages={messages} name={name} />
              </div>
            </div>
            <div class="box-footer">
              <form action="#" method="post">
                <div class="input-group">
                  <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
              </form>
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
}

export default Chat;