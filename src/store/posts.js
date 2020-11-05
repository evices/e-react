import axios from "axios";

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
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTEzNmFlYmQ1MDRjNGM4ZmI2YjI2YiIsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJjYXBhYmlsaXRpZXMiOlsicmVhZCIsImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSJdLCJleHBpcmVzSW4iOjkwMDAwMCwiaWF0IjoxNjA0NTM2NzkyfQ.3N8RqiTqT9BZAcKG_zdHunY7igP7u5sHFJEaqJWt37w` }
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
