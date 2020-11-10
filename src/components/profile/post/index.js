import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Service from '../../service'
import { connect } from "react-redux";
import { getPostsByUserName } from "../../../store/posts";
import PropTypes from 'prop-types';
import { If, Then } from 'react-if';


const PostByUser = props => {

    console.log(props)
    useEffect(() => {
        props.getPostsByUserName();
    });

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
                <p>خدماتي</p>
                <If condition={user.user.role !== 'user'}>
                    <Then>
                    <a href="#" onClick={() => { setModalShow(true); console.log(modalShow) }} data-toggle="modal" className="btn sl-btn sl-btn-md" data-target="#loginpopup">تسجيل خدمة</a>
                    <Service
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    </Then>
                </If>
            </div>
            <div class="sl-dashboardbox__content">
                <ul>
                    {
                        post.map(item => {
                            return (
                                <li class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread services-list">
                                    {item.title}
                                    {/* <a className="delete-btn">حذف</a> */}
                                    <a className="delete-btn"><i class="fas fa-trash"></i></a>
                                </li>
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