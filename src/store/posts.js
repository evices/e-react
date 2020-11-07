import {
  act
} from "@testing-library/react";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

let initialState = {
  Posts: [{
    category: "loading",
    title: "load",
    description: "load",
    username: "load",
  }, ],
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
      return {
        ...state, Posts: action.payload.result
      };
      // assume receives category in the payload when choosing the category in the main page of the app
    case "filterPosts":
      return {
        ...state,
        ActivePosts: state.Posts.filter((post) => {
          return post.category === action.payload;
        }),
      };
    case "getSinglePost":
      console.log(action, "<<<<<<<<<<");
      return {
        ...state, choosedPost: action.payload
      };

    case 'getPostsUserName':
      console.log('action postUserName', action);
      return {
        ...state, Posts: action.payload
      };

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

export const makeReservation = (post, user, date, address) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  let data = {
    "user_id": user.user._id,
    "provider_id": post.providerId,
    "post_id": post._id,
    'book_date': date,
    'address': address,
    "client": user.user._id,
    "provider": post.providerId,
    "post": post._id,
  }
  console.log('data>>', data);
  return axios
    .post(`${url}/reservation`, data, config)
    .then(res => {
      // console.log('>>>>>>>', res.data)
      return res.data;
      // if(res.data.message==='This job already booked and approved') dispatch(showsaggestion(res.data.message))
    })
    .catch((error) => console.log(error.response));
};

export const addReservation = (_id, reservationData) => {
  const config = {
  headers: {
    Authorization: `Bearer ${user.token}`
  }
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
    .catch(error => console.log(error.response.data));
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

export const getPostsByUserName = () => (dispatch) => {
  let username = user.user.username;

  return axios.get(`${url}/post`).then((data) => {
    console.log(data.data, ">>>>>>>>>>>>>>>>>>>>>>>>");

    let modify = data.data.result.filter(post => {
      return post.username == username
    })
    console.log(modify, ">>>>>>>>>>>>>>>>>>>>>>>>");
    dispatch({
      type: "getPostsUserName",
      payload: modify,
    });
    // dispatch(getSinglePost(data.data[0]));
  });
}