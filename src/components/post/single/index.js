import { useEffect } from "react";
import { connect } from "react-redux";

function postDetails(props) {
    useEffect(()=>{
        props.getSinglePost(window.location.pathname.split("/")[2])
    },[])


  return (
    <div>
      <h6>{props.post.category}</h6>
      <h3>{props.post.title}</h3>
      <p>{props.post.description}</p>
      <h5>{props.post.username}</h5>
      <button>schedule appointment</button>
    </div>
  );
}
const mapStateToProps=(state)=>({
    post:state.choosedPost
})
const mapDispatchToState=(dispatch)=>({
    getSinglePost: (id)=>dispatch(getSingleApiPost(id)) 
})

export default connect(mapStateToProps,mapDispatchToState)(postDetails)
