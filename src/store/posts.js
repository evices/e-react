let initialState={
    Posts:[],
    ActivePosts:[],
    choosedPost:null
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'getPosts':
        return {...state,Posts:action.payload.result}
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

let url= "https://evices-react.herokuapp.com/"
export const getAllApiPosts = () => (dispatch) => {
  return superagent.get(`${url}/post`).then((data) => {
    dispatch(getPost(data.body));
  });
};
export const getSingleApiPost =(id)=> (dispatch)=>{
  return superagent.get(`${url}/post/${id}`).then((data) => {
    dispatch(getPosts(data.body));
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

