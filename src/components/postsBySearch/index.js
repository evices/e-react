import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPostsBySearch } from "../../store/posts";
import { Link } from "react-router-dom";
import _ from 'lodash';

function PostsSearch(props) {
    useEffect(() => {
        console.log('postCat', window.location.pathname.split("/")[3])
        //   load all posts at loading the page
        let title=window.location.pathname.split("/")[2];
        let category=window.location.pathname.split("/")[3]
        props.getPostsBySearch(title,category);

    }, []);
    console.log('props',props.post.Posts);
    return (
        <main class="sl-main">
            <section class="sl-main-section">
                <div class="container">
                <div class="sl-serviceProvider">
                    <div class="sl-serviceProvider__content">
                    <div class="row">
                        {props.post.Posts.map((post,i) => {
                        const postedBy = post.postedBy || [];
                        return (
                            <div key={i} class="col-sm-6 col-lg-4 col-xl-3 post-item">
                            <div className="item">
                                <div className="sl-slider">
                                    <figure>
                                    <a href="javascript:void(0);">
                                        <img className="post-img"
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
                                        <a href="javascript:void(0);" className="sl-bg-green">
                                            موثوق
                                        </a>
                                        </div>
                                        <a href="javascript:void(0);">{post.category}</a>
                                        <h5>
                                        <Link
                                            to = {{
                                                pathname: `/single/${post._id}`,
                                                }}>
                                            {post.title}
                                        </Link>
                                        </h5>
                                        <div className="sl-featureRating">
                                        {_.times(Math.ceil(post.rateAVG), (i) => (
                                            <span class="fa fa-star checked"></span>
                                        ))}
                                        {_.times(5 - Math.ceil(post.rateAVG), (i) => (
                                            <span class="fa fa-star"></span>
                                        ))}
                                        <em>({post.comments ? post.comments.length : 0} تقييم)</em>
                                        </div>
                                        <em>
                                        بواسطة: <a href="javascript:void(0);">{postedBy.fullname}</a>
                                        </em>
                                        <div className="sl-shareHolder">
                                        <a href="javascript:void(0);" className="slShareHolder">
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
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
}


const mapStateToProps = (state) => ({
    post: state.posts,
});
const mapDispatchToState = (dispatch) => ({
    getPostsBySearch: (title,category) => dispatch(getPostsBySearch(title,category)),
});

export default connect(mapStateToProps, mapDispatchToState)(PostsSearch);