import axios from "axios";

let url = "https://evices-react.herokuapp.com/post";

let initialState = {
  Posts: [],
  ActivePosts: [],
  choosedPost: null
};

export default (state={Posts: []}, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'getPosts':
        return {...state,Posts:action.payload}
        // assume receives category in the payload when choosing the category in the main page of the app
    case 'filterPosts':
        return {...state,ActivePosts:state.Posts.filter(post=>{
            return post.category === action.payload
        })}
    case 'getSinglePost':
      return {...state,choosedPost:action.payload}
    default:
        return state
  }
};

export const getAllApiPosts = () => (dispatch) => {
  console.log(dispatch);
  return axios.get(`${url}`).then((data) => {
    dispatch(getPosts(data.data.result));
  });
};

// export const getAllApiPosts = () => {
//   return async dispatch => {
//       let response = await axios({ method: 'GET', url });
//       dispatch(getPosts(response.data.result));
//       console.log(url);
//   }
// }

export const getSingleApiPost = (id) => (dispatch) => {
  return axios.get(`${url}/${id}`).then((data) => {
    dispatch(getPosts(data.data[0]));
  });
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

// export const getAllApiPosts = () => {
//   return async dispatch => {
//       let response = await axios({ method: 'GET', url });
//       dispatch({ type: 'GET_POSTS', payload: response.data.result });
//   }
// }
