import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllApiPosts } from '../../../../store/posts';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import _ from "lodash";

const FeaturedItem = props => {
    
    useEffect(() => {
        //   load all posts at loading the page
        props.getAllApiPosts();

    }, []);

        return (
            <OwlCarousel className="owl-carousel owl-theme sl-owl-nav" id="slCategoryOwl" loop margin={20} items={4} nav dots={false} >
                {props.posts.map((post, i) => { 

                    console.log(post);
                    return (
                        <div className="item">
                            <div className="sl-slider">
                                <figure>
                                <a href="javascript:void(0);">
                                    <img
                                    src="https://images.unsplash.com/photo-1599263151533-560c67aca217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                    alt="Image Description"
                                    />
                                </a>
                                <a href="javascript:void(0);">
                                    <img
                                    src="https://image.freepik.com/free-vector/man-character-avatar-icon-carpenter-makes-product-from-tree_51635-2992.jpg"
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
                                    <a href="/single/23123">{post.title}</a>
                                    </h5>
                                    <div class="sl-featureRating">
                                        {_.times(post.rateAVG, (i) => (
                                            <span class="fa fa-star checked"></span>
                                        ))}
                                        {_.times(5 - post.rateAVG, (i) => (
                                            <span class="fa fa-star"></span>
                                        ))}
                                    <em>({post.comments ? post.comments.length : 0} تقييم)</em>
                                    </div>
                                    <em>
                                    بواسطة: <a href="javascript:void(0);">{post.postedBy ? post.postedBy.fullname : post.username}</a>
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
                    )
                })}
            </OwlCarousel>
        );
    //   })
    
};

FeaturedItem.propTypes = {
    
};

const mapStateToProps = (state) => ({
    posts: state.posts.Posts.slice(0, 5),
  });
  const mapDispatchToProps = (dispatch) => ({
    getAllApiPosts: () => dispatch(getAllApiPosts()),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(FeaturedItem);
  
