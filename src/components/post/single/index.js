import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleApiPost } from "../../../store/posts";

function PostDetails(props) {

    const getSingleApiPost = props.getSingleApiPost(props.match.params.id);
  

  return (
    <div>
      <h6>{props.post.category}</h6>
      <h3>{props.post.title}</h3>
      <p>{props.post.description}</p>
      <h5>{props.post.username}</h5>
      {console.log(props)}
      <button>schedule appointment</button>
    </div>
  );
}
const mapStateToProps=(state)=>({
    post:state.posts.Posts
})
const mapDispatchToState=(dispatch)=>({
  getSingleApiPost: (id)=>dispatch(getSingleApiPost(id)) 
})

export default connect(mapStateToProps,mapDispatchToState)(PostDetails)
