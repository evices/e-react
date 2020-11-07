import Axios from "axios";

let initialState = {
  Reservations: [
    {
      address: {
        address: "Loading ...",
        phone: "Loading ...",
      },
      is_approved: 0,
      book_date: "Loading ...",
      client: {
        username: "Loading ...",
        address: [
          {
            address: "Loading ...",
            phone: "Loading ...",
          },
        ],
        fullname: "Loading ...",
      },
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "getReservation":
      return { Reservations: action.payload };

    default:
      return state;
  }
};
let url = "https://evices-react.herokuapp.com";

export const respondingToReservation = (id, user, status) => (dispatch) => {
  let data = { is_approved: status };
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  return Axios.patch(`${url}/reservation/${id}`, data, config)
    .then(() => {
      dispatch(loadReservationFromApi(user.user._id));
    })
    .catch((err) => console.log(err.response.data));
};

export const loadReservationFromApi = (user_id) => (dispatch) => {
  return Axios.get(`${url}/reservation`).then((data) => {
    let userReservation = data.data.result.filter(
      (ele) => ele.provider_id === user_id
    );

    dispatch({
      type: "getReservation",
      payload: userReservation,
    });
  });
};
