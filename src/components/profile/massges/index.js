import { connect } from "react-redux";
import { getMessages } from "../../../store/messages";
import React, { useEffect } from "react";
import { If, Then, Else } from "react-if";

function Massges(props) {
  useEffect(() => {
    props.getMessages();
  }, []);

  return (
    <div class="sl-dashboardbox sl-newAppointments">
      <div class="sl-dashboardbox__title">
        <h2>المراسلات</h2>
      </div>
      <div class="sl-dashboardbox__content">
        <ul>
          <If condition={props.messages.Messages.length}>
            <Then>
              {props.messages.Messages.map((message, i) => {
                return (
                  <li key={i} class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">
                    <h4>from: ({message.sender_name})</h4>
                    <p>{message.message_text}</p>
                  </li>
                );
              })}
            </Then>
            <Else>
              <li class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">There is not messages to show</li>
            </Else>
          </If>
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  messages: state.messages,
});
const mapDispatchToProps = (dispatch) => ({
  getMessages: () => dispatch(getMessages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Massges);
