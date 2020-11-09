import Axios from "axios";
import UpdateUserInfo from "../components/profile/fetch-profile";

let initialState = {
  Messages: [
    {
      receiver_name: "Erekat",
      sender_name: "Nedal",
      message_text: "foo",
      is_deleted: "false",
      created_date: "now",
      sender_id: {
        _id: "0",
        username: "foo",
      },
      receiver_id: {
        _id: "0",
        username: "foo",
        fullname: "foo",
      },
    },
  ],
  filteredMessages: [],
  activeUser: {
    porviderId: "",
    username: "",
  },
};
let url = "https://evices-react.herokuapp.com";

export default (state = initialState, action) => {
  switch (action.type) {
    case "getMessages":
      return { ...state, Messages: action.payload };
    case "filter":
      let { id, user_id, sender } = action.payload;
      return {
        ...state,
        activeUser: { porviderId: id, username: sender },
        filteredMessages: state.Messages.filter((ele) => {
          return (
            ele.sender_id._id === id ||
            (ele.sender_id._id === user_id && ele.receiver_id._id === id)
          );
        }),
      };

    default:
      return state;
  }
};

/**
 * this method will dispatch to load all msgs from database and filter depending on the user
 * @param {id} user_id of the user which is using the app from auth state
 */
export const getMessages = (user_id) => (dispatch) => {
  return Axios.get(`${url}/message`).then((data) => {
    console.log("AlluserMessges", data.data.result);
    let userMessges = data.data.result.filter((ele, i) => {
      return ele.receiver_id._id === user_id || ele.sender_id._id === user_id;
    });
    dispatch({
      type: "getMessages",
      payload: userMessges,
    });
  });
};

/**
 * This function will dispatch when we need to send msg
 * it will make a post method to add msg on message schema
 * @param {token,userInformation} sender from the auth state
 * @param {username,porviderId} receiver from the post information
 * @param {string} msg
 */
export const sendMessage = (sender, receiver, msg) => (dispatch) => {
  console.log(sender, receiver, msg);
  const config = {
    headers: {
      Authorization: `Bearer ${sender.token}`,
    },
  };

  let data = {
    receiver_name: receiver.username,
    sender_name: sender.user.username,
    message_text: msg,
    sender_id: sender.user._id,
    receiver_id: receiver.porviderId,
  };
  return Axios.post(`${url}/message`, data, config).then(() => {
    dispatch(getMessages(sender.user._id)).then(() => {
      dispatch(
        filterMesseges(receiver.porviderId, sender.user._id, receiver.username)
      );
    });
  });
};

export const filterMesseges = (id, user_id, sender) => {
  return {
    type: "filter",
    payload: { id, user_id, sender },
  };
};
