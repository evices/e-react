import { connect } from "react-redux";
import { getMessages } from "../../../store/messages";
import React, { useEffect } from "react";
import { If, Then, Else } from "react-if";

function Massges(props) {
  useEffect(() => {
    props.getMessages();
  }, []);

  return (
    <>
      <If condition={props.messages.Messages.length}>
        <Then>
          {props.messages.Messages.map((message, i) => {
            return (
              <>
                <h4>{message.sender_name}</h4>
                <p>{message.message_text}</p>
              </>
            );
          })}
        </Then>
        <Else>
          <h1>There is not messages to show</h1>
        </Else>
      </If>
    </>
  );
}
const mapStateToProps = (state) => ({
  messages: state.messages,
});
const mapDispatchToProps = (dispatch) => ({
  getMessages: () => dispatch(getMessages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Massges);


