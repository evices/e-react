import React, { useEffect } from "react";
import { connect } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import { getAllApiPosts, setActivePage } from "../../store/posts";
import { If, Then, Else } from "react-if";

import { Link } from "react-router-dom";

import _ from "lodash";

function Post(props) {
  let numPer = props.posts.numPer;
  const numOfPaginationPages = Math.ceil(props.posts.Posts.length / numPer);

  const paginate = () => {
    let items = [];
    console.log(props);
    for (let i = 1; i <= numOfPaginationPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === props.posts.CurruntPage}
          onClick={() => changePage(i)}
          activeLabel={i === props.posts.CurruntPage && "(current)"}
        >
          {i}
        </Pagination.Item>
      );
    }
    return items;
  };
  const changePage = (num) => {
    console.log('sss',num)
    props.setActivePage(num);
  };
  useEffect(() => {
    //   load all posts at loading the page
    props.getAllApiPosts();
  }, []);
  console.log(props.posts.Posts);
  return (
    <main class="sl-main">
      <section class="sl-main-section">
        <div class="container">
          <div class="sl-serviceProvider">
            <div class="sl-serviceProvider__content">
              <div class="row">
                {/* <If condition={props.posts.ActivePosts.length}>
                  <Then> */}
                {props.posts.ActivePosts.map((post, i) => {
                  const postedBy = post.postedBy || [];
                  return (
                    <div key={i} class="col-sm-6 col-lg-4 col-xl-3 post-item">
                      <div className="item">
                        <div className="sl-slider">
                          <figure>
                            <a href="javascript:void(0);">
                              <img
                                className="post-img"
                                src="http://amentotech.com/htmls/servosell/images/index/service-provider/img-10.jpg"
                                alt="Image Description"
                              />
                            </a>
                            <a href="javascript:void(0);">
                              <img
                                src="http://amentotech.com/htmls/servosell/images/index/service-provider/user-icon/img-06.jpg"
                                alt="Image Description"
                              />
                            </a>
                            <a href="javascript:void(0);" className="sl-like">
                              <i className="far fa-heart" />
                            </a>
                          </figure>
                          <div className="sl-slider__content">
                            <div className="sl-slider__header">
                              <div className="sl-slider__tags">
                                <a
                                  href="javascript:void(0);"
                                  className="sl-bg-red-orange"
                                >
                                  مميز
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="sl-bg-green"
                                >
                                  موثوق
                                </a>
                              </div>
                              <a href="javascript:void(0);">{post.category}</a>
                              <h5>
                                <a href={"/single/" + post._id}>{post.title}</a>
                              </h5>
                              <div className="sl-featureRating">
                                {_.times(Math.ceil(post.rateAVG), (i) => (
                                  <span class="fa fa-star checked"></span>
                                ))}
                                {_.times(5 - Math.ceil(post.rateAVG), (i) => (
                                  <span class="fa fa-star"></span>
                                ))}
                                <em>
                                  ({post.comments ? post.comments.length : 0}{" "}
                                  تقييم)
                                </em>
                              </div>
                              <em>
                                بواسطة:{" "}
                                <a href="javascript:void(0);">
                                  {postedBy.fullname}
                                </a>
                              </em>
                              <div className="sl-shareHolder">
                                <a
                                  href="javascript:void(0);"
                                  className="slShareHolder"
                                >
                                  <i className="ti-more-alt" />
                                </a>
                                <div className="sl-shareHolder__option">
                                  <span>مشاركة:</span>
                                  <ul className="sl-socialicons">
                                    <li className="sl-facebook">
                                      <a href="javascript:void(0);">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li className="sl-twitter">
                                      <a href="javascript:void(0);">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                    <li className="sl-instagram">
                                      <a href="javascript:void(0);">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* </Then>
                <Else>
                  <Then>
                    <img className="no-data-img" src="/images/no-data.png" />
                  </Then>
                </Else>
                </If> */}
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sl-pagination">
        <div class="sl-pagination__button-num">
          <Pagination>
            {paginate()}
          </Pagination>
        </div>
      </div>
    </main>
  );
}

// <div key={i}>
//   <h6>{post.category}</h6>
//   <h3>{post.title}</h3>
//   <p>{post.description}</p>
//   <h5>{post.username}</h5>
//   <button>
//     <Link
//       to={{
//         pathname: `/single/${post._id}`,
//       }}
//     >
//       Show more ...
//     </Link>
//   </button>
// </div>

const mapStateToProps = (state) => ({
  posts: state.posts,
});
const mapDispatchToProps = (dispatch) => ({
  getAllApiPosts: () => dispatch(getAllApiPosts()),
  setActivePage: (num) => dispatch(setActivePage(num)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);
