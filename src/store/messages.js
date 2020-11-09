import Axios from "axios";

let initialState = {
  Messages: [
    {
      receiver_name: "Erekat",
      sender_name: "Nedal",
      message_text: "foo",
      is_deleted: "false",
      created_date: "now",
    },
  ],
};
let url = "https://evices-react.herokuapp.com";

export default (state = initialState, action) => {
  switch (action.type) {
    case "getMessages":
      return { Messages: action.payload };

    default:
      return state;
  }
};


export const getMessages=()=>(dispatch)=>{
    return Axios.get(`${url}/message`).then((data)=>{
      dispatch({
        type:"getMessages",
        payload:data.data.result
      })
    })
}
