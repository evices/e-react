import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllApiPosts } from "../../store/posts";
import { Link } from "react-router-dom";

function Post(props) {
  useEffect(() => {
    //   load all posts at loading the page
    props.getAllApiPosts();

  }, []);
  console.log(props.posts.Posts);
  return (
    <div className="postContainer">
      {props.posts.Posts.map((post,i) => {
        return (
          <div key={i}>
            <h6>{post.category}</h6>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <h5>{post.username}</h5>
            <button>
              <Link
                to={{
                  pathname: `/single/${post._id}`,
                }}
              >
                Show more ...
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => ({
  posts: state.posts,
});
const mapDispatchToProps = (dispatch) => ({
  getAllApiPosts: () => dispatch(getAllApiPosts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);
