import { connect } from "react-redux";
import { getMessages,filterMesseges,sendMessage } from "../../../store/messages";
import React, { useEffect, useRef } from "react";
import { If, Then, Else } from "react-if";
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/ar';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import './_inbox.scss';


function Massges(props) {

  const formatter = buildFormatter(frenchStrings);

  useEffect(() => {
    props.getMessages(props.user.user._id);
    scrollToBottom()
  }, []);

  const messagesEndRef = useRef(null);

const handleSubmit=(e)=>{
  e.preventDefault();
  props.sendMessage(props.user, props.messages.activeUser, e.target.msg.value);
  e.target.reset();
  scrollToBottom();
}

const scrollToBottom = () => {
  messagesEndRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

  let users = [];
  let sender = [];

  props.messages.Messages.map((ele) => {
    if (
      !users.includes(ele.sender_id._id) &&
      props.user.user._id != ele.sender_id._id
    ) {
      users.push(ele.sender_id._id);
      sender.push(ele.sender_id);
    }
  });

  console.log("props.messages.filteredMessages", props.messages);
  return (
    <div class="sl-dashboardbox sl-inbox">
      <div class="sl-dashboardbox__title">
          <p>الرسائل الداخلية</p>
      </div>
      <div class="sl-dashboardbox__content">
          <div class="sl-inbox__user">
              <ul class="sl-inbox__user--list sl-y-axis mCustomScrollbar">
                {sender.map((ele) => {
                  return (
                    <li onClick={() => props.filterMesseges(ele._id,props.user.user._id,ele.username)} class="sl-inbox">
                        <div class="sl-inbox__user--text">
                            <h5>{ele.username}</h5>
                        </div>
                    </li>
                  );
                })}
              </ul>
          </div>
          <div class="sl-messageUser">
              <div ref={messagesEndRef} class="sl-messageUser__area sl-y-axis mCustomScrollbar">
                <If condition={props.messages.filteredMessages.length}>
                  <Then>
                    {props.messages.filteredMessages.map((message, i) => {
                      console.log(message.receiver_id.username == props.user.user.username)

                      return (
                        // <li key={i} class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">
                        //   <span class="checked">{message.sender_name}</span>
                        //   <p>{message.message_text}</p>
                        // </li>
                        
                        <div class={"sl-messageUser__area--" + (message.receiver_id.username == props.user.user.username ? 'right' : 'left')}>
                          <p>{message.message_text}</p>
                          <span><TimeAgo date={new Date(message.created_date)} formatter={formatter} /></span>
                      </div>
                      );
                    })}
                    {/* <form onSubmit={handleSubmit}>
                      <input type="text" name="msg" class=" sl-form-control" placeholder=">>type Here<<"/>
                      <button className="btn sl-btn">send</button>
                    </form> */}
                  </Then>
                  <Else>
                    <div class="">
                      لا يوجد رسائل لعرضها
                    </div>
                  </Else>
                </If>
                  
              </div>
              
              <div class="sl-emoji">
                <form onSubmit={handleSubmit}>
                  <div class="sl-input-group">
                      <input name="msg" class="form-control sl-form-control sl-prepend" type="text" placeholder="Type message here"/>
                      <button class="btn sl-btn sl-btn-active sl-append"><i class="lnr lnr-arrow-right"></i></button>
                  </div>
                </form>
              </div>
          </div>
      </div>
  </div>

    // <div class="sl-dashboardbox sl-newAppointments">
    //   <div class="sl-dashboardbox__title">
    //     <h2>المراسلات</h2>
    //   </div>
    //   <div>
    //     {sender.map((ele) => {
    //       return (
    //         <div >
    //           <h3 >{ele.username}</h3>
    //           <button className="btn sl-btn sl-btn-md" onClick={() => props.filterMesseges(ele._id,props.user.user._id,ele.username)}>open</button>
    //         </div>
    //       );
    //     })}
    //   </div>

    //   <div class="sl-dashboardbox__content">
    //     <ul>
    //       <If condition={props.messages.filteredMessages.length}>
    //         <Then>
    //           {props.messages.filteredMessages.map((message, i) => {
    //             return (
    //               <li
    //                 key={i}
    //                 class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread"
    //               >
    //                 <span class="checked">from: {message.sender_name}</span>
    //                 <p>{message.message_text}</p>
    //               </li>
    //             );
    //           })}
    //           <form onSubmit={handleSubmit}>
    //             <input type="text" name="msg" class=" sl-form-control" placeholder=">>type Here<<"/>
    //             <button className="btn sl-btn">send</button>
    //           </form>
    //         </Then>
    //         <Else>
    //           <li class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">
    //             There is not messages to show
    //           </li>
    //         </Else>
    //       </If>
    //     </ul>
    //   </div>
    // </div>
  );
}
const mapStateToProps = (state) => ({
  messages: state.messages,
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  getMessages: (user_id) => dispatch(getMessages(user_id)),
  filterMesseges: (id,user_id,sender)=> dispatch(filterMesseges(id,user_id,sender)),
  sendMessage: (sender, receiver, msg)=> dispatch(sendMessage(sender, receiver, msg))
});
export default connect(mapStateToProps, mapDispatchToProps)(Massges);
