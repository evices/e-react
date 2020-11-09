import { connect } from "react-redux";
import { getMessages,filterMesseges,sendMessage } from "../../../store/messages";
import React, { useEffect } from "react";
import { If, Then, Else } from "react-if";

function Massges(props) {
  useEffect(() => {
    props.getMessages(props.user.user._id);
  }, []);

const handleSubmit=(e)=>{
  e.preventDefault();props.sendMessage(props.user, props.messages.activeUser, e.target.msg.value);e.target.reset();
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
    <div class="sl-dashboardbox sl-newAppointments">
      <div class="sl-dashboardbox__title">
        <h2>المراسلات</h2>
      </div>
      <div>
        {sender.map((ele) => {
          return (
            <div >
              <h3 >{ele.username}</h3>
              <button className="btn sl-btn sl-btn-md" onClick={() => props.filterMesseges(ele._id,props.user.user._id,ele.username)}>open</button>
            </div>
          );
        })}
      </div>

      <div class="sl-dashboardbox__content">
        <ul>
          <If condition={props.messages.filteredMessages.length}>
            <Then>
              {props.messages.filteredMessages.map((message, i) => {
                return (
                  <li
                    key={i}
                    class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread"
                  >
                    <span class="checked">from: {message.sender_name}</span>
                    <p>{message.message_text}</p>
                  </li>
                );
              })}
              <form onSubmit={handleSubmit}>
                <input type="text" name="msg" class=" sl-form-control" placeholder=">>type Here<<"/>
                <button className="btn sl-btn">send</button>
              </form>
            </Then>
            <Else>
              <li class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">
                There is not messages to show
              </li>
            </Else>
          </If>
        </ul>
      </div>
    </div>
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
