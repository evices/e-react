import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Service from '../../service'
import { connect } from "react-redux";
import { getPostsByUserName } from "../../../store/posts";
import PropTypes from 'prop-types';

const PostByUser = props => {

    console.log(props)
    useEffect(() => {
        props.getPostsByUserName();
    }, [props.post.Posts]);

    console.log('loggedin', props)
    const [modalShow, setModalShow] = React.useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    
    // useEffect(() => {
    //     setModalShow(false);
    //   }, [props.isLoggedIn])


    console.log(props.post.Posts);
    let post = props.post.Posts || [];
    return (
        <div class="sl-dashboardbox sl-newAppointments">
            <div class="sl-dashboardbox__title">
                <h2>خدماتي</h2>
                <a href="#" onClick={() => { setModalShow(true); console.log(modalShow) }} data-toggle="modal" data-target="#loginpopup">تسجيل خدمة</a>
                <Service
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
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