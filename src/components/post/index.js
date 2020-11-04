import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllApiPosts } from "../../store/posts";
import { Link } from "react-router-dom";

function Post(props) {

  const getAllApiPosts = props.getAllApiPosts;
  
  useEffect(() => {
    getAllApiPosts();
  }, [getAllApiPosts]);

  return (
    <div className="postContainer">
      {console.log(props)}
      {props.posts.map((post) => {
        return (
          <div>
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

const mapStateToProps = store => ({
  posts: store.posts.Posts,
});

const mapDispatchToProps = { getAllApiPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Post);
