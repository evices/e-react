let initialState={
    Posts:[],
    ActivePosts:[]
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'getPosts':
        return {...state,Posts:action.payload}
        // assume receives category in the payload when choosing the category in the main page of the app
    case 'filterPosts':
        return {...state,ActivePosts:state.Posts.filter(post=>{
            return post.category === action.payload
        })}
    default:
        return state
  }
};

let url=''
export const getAllApiPosts = () => (dispatch) => {
  return superagent.get(url).then((data) => {
    dispatch(getPost(data.body));
  });
};
export const getPost = (posts) => {
  return {
    type: "getPosts",
    payload: posts,
  };
};

// export const showPostDetails = (id) => {
//   return {
//     type: "showDetails",
//     payload: id,
//   };
// };
