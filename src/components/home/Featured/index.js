import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import FeaturedServices from './FeaturedItem';
import { connect } from "react-redux";
import { getAllApiPosts } from '../../../store/posts';

const Featured = props => {

    useEffect(() => {
        props.getAllApiPosts();
    }, []);

    console.log('props from featured',props.posts);
    return (
        <section className="sl-main-section">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-9 col-xl-8">
                    <div className="sl-sectionHead">
                    <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                        <h2>الخدمات المميزة</h2>
                    </div>
                    <div className="sl-sectionHead__description">
                        <p />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <FeaturedServices posts={props.posts.Posts.slice(0, 5)} />

        </section>
    );
};

Featured.propTypes = {
    
};

const mapStateToProps = (state) => ({
    posts: state.posts,
  });
  const mapDispatchToProps = (dispatch) => ({
    getAllApiPosts: () => dispatch(getAllApiPosts()),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Featured);
  