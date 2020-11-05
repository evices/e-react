import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllApiPosts } from '../../../../store/posts';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const FeaturedItem = props => {
    // useEffect(() => {
    //     //   load all posts at loading the page
    //     props.getAllApiPosts();
    
    //   }, []);

      let posts = props.posts.Posts.slice(0, 5);
      console.log(posts);
    //   posts.map((post, i) => {
        return (
            <OwlCarousel className="owl-carousel owl-theme sl-owl-nav" id="slCategoryOwl" loop margin={20} items={4} nav dots={false} >
                <div className="item">
                <div className="sl-slider">
                    <figure>
                    <a href="javascript:void(0);">
                        <img
                        src="images/index/service-provider/img-01.jpg"
                        alt="Image Description"
                        />
                    </a>
                    <a href="javascript:void(0);">
                        <img
                        src="images/index/service-provider/user-icon/img-01.jpg"
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
                        <a href="javascript:void(0);">خدمات النجارة</a>
                        <h5>
                        <a href="/single/23123">صيانة خشب الباركيه</a>
                        </h5>
                        <div className="sl-featureRating">
                        <span className="sl-featureRating__stars">
                            <span />
                        </span>
                        <em>(1887 تقييم)</em>
                        </div>
                        <em>
                        بواسطة: <a href="javascript:void(0);">وليد العفيفي</a>
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
            </OwlCarousel>
        );
    //   })
    
};

FeaturedItem.propTypes = {
    
};

const mapStateToProps = (state) => ({
    posts: state.posts,
  });
  const mapDispatchToProps = (dispatch) => ({
    getAllApiPosts: () => dispatch(getAllApiPosts()),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(FeaturedItem);
  
