import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

let initialState = {
  Posts: [
    {
      category: "loading",
      title: "load",
      description: "load",
      username: "load",
    },
  ],
  ActivePosts: [],
  choosedPost: {
    category: "loading",
    title: "load",
    description: "load",
    username: "load",
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "getPosts":
      return { ...state, Posts: action.payload.result };
    // assume receives category in the payload when choosing the category in the main page of the app
    case "filterPosts":
      return {
        ...state,
        ActivePosts: state.Posts.filter((post) => {
          return post.category === action.payload;
        }),
      };
    case "getSinglePost":
      console.log(action,"<<<<<<<<<<");
      return { ...state, choosedPost: action.payload };
    default:
      return state;
  }
};

let url = "https://evices-react.herokuapp.com";
export const getAllApiPosts = () => (dispatch) => {
  return axios.get(`${url}/post`).then((data) => {
    dispatch(getPosts(data.data));
  });
};
export const getSingleApiPost = (id) => (dispatch) => {
  return axios.get(`${url}/post/${id}`).then((data) => {
    console.log(data, ">>>>>>>>>>>>>>>>>>>>>>>>");
    dispatch(getSinglePost(data.data[0]));
  });
};

export const addReservation = (_id, reservationData) => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
};
  let data = { 
    "$push": {
      "comments": {
        "comments": reservationData.comments,
        "rate": reservationData.rate,
        "username": reservationData.username 
      }
    }
  };

  console.log(data);
  return axios
  .patch(
    `${url}/post/${_id}`,  
    data,
    config)
  .catch( error => console.log(error.response.data));
}


export const getPosts = (posts) => {
  return {
    type: "getPosts",
    payload: posts,
  };
};

export const getSinglePost = (post) => {
  return {
    type: "getSinglePost",
    payload: post,
  };
};
