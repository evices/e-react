import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
import { getPostsByUserName } from "../../../store/posts";
import PropTypes from 'prop-types';

const PostByUser = props => {

    console.log(props)
    useEffect(() => {
        props.getPostsByUserName();
    }, []);


    console.log(props.post.Posts);
    let post = props.post.Posts || [];
    return (
        <div class="sl-dashboardbox sl-newAppointments">
            <div class="sl-dashboardbox__title">
                <h2>خدماتي</h2>
            </div>
            <div class="sl-dashboardbox__content">
                <ul>
                    {
                        post.map(item => {
                            return (
                            <li class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

PostByUser.propTypes = {
    
};

const mapStateToProps = (state) => ({
    post: state.posts,
});
const mapDispatchToState = (dispatch) => ({
    getPostsByUserName: () => dispatch(getPostsByUserName()),
});

export default connect(mapStateToProps, mapDispatchToState)(PostByUser);