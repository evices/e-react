import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPostsByCategory } from "../../../store/posts";
import { Link } from "react-router-dom";

function PostsCategory(props) {
    useEffect(() => {
        console.log('postCat', window.location.pathname.split("/")[3])
        //   load all posts at loading the page
        props.getPostsByCategory(window.location.pathname.split("/")[3]);

    }, []);
    console.log(props.post.Posts);
    return (
        <div className="postContainer">
            {props.post.Posts.map((post, i) => {
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
    post: state.posts,
});
const mapDispatchToState = (dispatch) => ({
    getPostsByCategory: (category) => dispatch(getPostsByCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToState)(PostsCategory);