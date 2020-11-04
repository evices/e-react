import { useEffect } from "react";
import { connect } from "redux";
function post(props) {
  useEffect(() => {
    //   load all posts at loading the page
    props.getAllApiPosts();
  }, []);
  return (
    <div className="postContainer">
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
                  pathname: `/post/${post._id}`,
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
  posts: state.Posts,
});
const mapDispatchToProps = (dispatch) => ({
  getAllApiPosts: () => dispatch(getAllApiPosts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(post);
