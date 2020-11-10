// import {
//   act
// } from "@testing-library/react";
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
    a: "loading",
    title: "load",
    description: "load",
    username: "load",
  },
  CurruntPage: 1,
  numPer: 4,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "getPosts":
      let num1 = state.CurruntPage;
      let newPagesa = action.payload.result.slice(
        num1 * state.numPer - state.numPer,
        num1 * state.numPer
      );
      return {
        ...state,
        ActivePosts: newPagesa,
        Posts: action.payload.result,
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
        ...state,
        choosedPost: action.payload,
      };

    case "getPostsUserName":
      console.log("action postUserName", action);
      return {
        ...state,
        Posts: action.payload,
      };

    case "getPostsCategory":
      console.log("action getPostsCategory", action);
      return {
        ...state,
        Posts: action.payload,
      };

    case "getPostsSearch":
      console.log("action getPostsSearch", action);
      return {
        ...state,
        Posts: action.payload,
      };

    case "activePage":
      // console.log("action getPostsSearch", action);
      let num = action.payload;
      let newPages = state.Posts.slice(
        num * state.numPer - state.numPer,
        num * state.numPer
      );
      return {
        ...state,
        ActivePosts: newPages,
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
      Authorization: `Bearer ${user.token}`,
    },
  };
  let data = {
    user_id: user.user._id,
    provider_id: post.porviderId,
    post_id: post._id,
    book_date: date,
    address: address,
    client: user.user._id,
    provider: post.porviderId,
    post: post._id,
  };
  console.log("data>>", data);
  return axios
    .post(`${url}/reservation`, data, config)
    .then((res) => {
      // console.log('>>>>>>>', res.data)
      return res.data;
      // if(res.data.message==='This job already booked and approved') dispatch(showsaggestion(res.data.message))
    })
    .catch((error) => console.log(error.response));
};

export const addReservation = (_id, reservationData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  let data = {
    $push: {
      comments: {
        comments: reservationData.comments,
        rate: reservationData.rate,
        username: reservationData.username,
      },
    },
  };

  console.log(data);
  return axios
    .patch(`${url}/post/${_id}`, data, config)
    .catch((error) => console.log(error.response.data));
};

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
  let username = user ? user.user.username : null;

  return axios.get(`${url}/post`).then((data) => {
    console.log(data.data, ">>>>>>>>>>>>>>>>>>>>>>>>");

    let modify = data.data.result.filter((post) => {
      return post.username == username;
    });
    console.log(modify, ">>>>>>>>>>>>>>>>>>>>>>>>");
    dispatch({
      type: "getPostsUserName",
      payload: modify,
    });
    // dispatch(getSinglePost(data.data[0]));
  });
};

export const addPost = (title, description, category) => {
  console.log("inside", title, description, category);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  let data = {
    username: user.user.username,
    porviderId: user.user._id,
    title: title,
    description: description,
    category: category,
    postedBy: user.user._id,
  };

  console.log(data);
  return axios
    .post(`${url}/post`, data, config)
    .then((res) => {
      console.log("res", res);

      // dispatch({
      //   // type: "getPostsUserName",
      //   // payload: modify,
      // });
      return res;

      // getAllApiPosts();
    })
    .catch((error) => console.log(error.response));
};

export const getPostsByCategory = (category) => (dispatch) => {
  // let username = user.user.username;
  console.log("cat", decodeURI(category));
  return axios.get(`${url}/post`).then((data) => {
    console.log(data.data, ">>>>>>>>>>>>>>>>>>>>>>>>");

    let modify = data.data.result.filter((post) => {
      return post.category == decodeURI(category);
    });
    console.log(modify, ">>>>>>>>>>>>>>>>>>>>>>>>");
    dispatch({
      type: "getPostsCategory",
      payload: modify,
    });
    // dispatch(getSinglePost(data.data[0]));
  });
};

export const getPostsBySearch = (title, category) => (dispatch) => {


console.log('getPostsBySearch',decodeURI(title), decodeURI(category))
  if (title!='title'  && category !=='categories') {


    return axios.get(`${url}/post`).then((data) => {
      console.log(data.data, ">>>>>>>>>>>>>>>>>>>>>>>>1");

      let modify = data.data.result.filter((post) => {
        return (
          post.category == decodeURI(category) && post.title == decodeURI(title)
        );
      });
      console.log(modify, ">>>>>>>>>>>>>>>>>>>>>>>>1");
      dispatch({
        type: "getPostsSearch",
        payload: modify,
      });
      // dispatch(getSinglePost(data.data[0]));
    });



  } else if (title!='title') {


    return axios.get(`${url}/post`).then((data) => {
      console.log(data.data, ">>>>>>>>>>>>>>>>>>>>>>>>2");

      let modify = data.data.result.filter((post) => {
        return post.title == decodeURI(title);
      });
      console.log(modify, ">>>>>>>>>>>>>>>>>>>>>>>>2");
      dispatch({
        type: "getPostsSearch",
        payload: modify,
      });
      // dispatch(getSinglePost(data.data[0]));
    });

  } else if (category!='categories') {


    return axios.get(`${url}/post`).then((data) => {
      console.log(data.data, ">>>>>>>>>>>>>>>>>>>>>>>>");

      let modify = data.data.result.filter((post) => {
        return post.category == decodeURI(category);
      });
      console.log(modify, ">>>>>>>>>>>>>>>>>>>>>>>>3");
      dispatch({
        type: "getPostsSearch",
        payload: modify,
      });
      // dispatch(getSinglePost(data.data[0]));
    });
  } else {
    return axios.get(`${url}/post`).then((data) => {
      console.log(data.data, ">>>>>>>>>>>>>>>>>>>>>>>>");

      // let modify = data.data.result.filter(post => {
      //   return post.category == decodeURI(category)
      // })
      // console.log(modify, ">>>>>>>>>>>>>>>>>>>>>>>>3");
      dispatch({
        type: "getPostsSearch",
        payload: data.data.result,
      });
      // dispatch(getSinglePost(data.data[0]));
    });
  }
};

export const setActivePage = (num) => {
  return {
    type: "activePage",
    payload: num,
  };
};
