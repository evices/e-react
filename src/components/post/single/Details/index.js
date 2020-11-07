import React, { useState, useEffect } from 'react';
import Review from '../Review';
import Modal from '../Modal';

import { connect } from "react-redux";
import { getSingleApiPost } from "../../../../store/posts";
import _ from "lodash";

function PostDetails(props) {
  useEffect(() => {
    props.getSinglePost(window.location.pathname.split("/")[2]);
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const postedBy = props.post.postedBy || [];
    return (
        <div>
            <div class="sl-appointment">
                <div class="sl-appointment__img">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/carpenter-business-logo-design-template-5632141ba6b9d45705f958c4daf08a26_screen.jpg?ts=1570483249"
                        alt="Image Description" />
                </div>
                <div class="sl-appointment__content">
                    <div class="sl-slider__tags">
                        <a href="javascript:void(0);" class="sl-bg-red-orange">مميز</a>
                        <a href="javascript:void(0);" class="sl-bg-green">موثوق</a>
                    </div>
                    <h5>{postedBy.fullname}</h5>
                    <h3>{props.post.title}</h3>
                    <div class="sl-appointment__feature">
                        <div class="sl-featureRating">
                        {_.times(props.post.rateAVG, (i) => (
                            <span class="fa fa-star checked"></span>
                        ))}
                        {_.times(5 - props.post.rateAVG, (i) => (
                            <span class="fa fa-star"></span>
                        ))}
                            <em>({props.post.comments ? props.post.comments.length : 0}) تقييم</em>
                        </div>
                    </div>
                    <div class="sl-detail">
                        <div class="sl-detail__date">
                            <em><i class="ti-calendar"></i> تاريخ الانشاء: {props.post.created_at}</em>
                        </div>
                        <div class="sl-detail__view">
                            <em><i class="ti-eye"></i> شاهدها 15,063</em>
                        </div>
                    </div>
                </div>
                <div class="sl-appointment__note">

                    <a onClick={() => {setModalShow(true); console.log(modalShow)}} class="btn sl-btn" data-toggle="modal"
                        data-target="#appointmentPopup">حجز</a>
                        <Modal
                            post={props.post}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />                        
                </div>
            </div>
            <div class="sl-main-section">
                <div class="row">
                    <div class="col-lg-4 col-xl-3">
                        <aside id="sl-asidebar" class="sl-asidebar">
                            <div class="sl-asideholder">
                                <a href="javascript:void(0);" id="sl-closeasidebar" class="sl-closeasidebar">
                                    <i class="lnr lnr-layers"></i>
                                </a>
                                <div class="sl-asidescrollbar">
                                    <div class="sl-contactDetail">
                                        <div class="sl-contactDetail__content">
                                            <h5>بيانات الاتصال</h5>
                                            <ul class="sl-contactDetail__descripton">
                                                <li><i class="ti-location-pin sl-address-icon"></i>
                                                    <address>فلسطين غزة</address>
                                                </li>
                                                <li><i class="ti-mobile sl-mobile-icon"></i><a
                                                        href="javascript:void(0);">{postedBy.phone}</a></li>
                                            </ul>
                                            <a href="javascript:void(0);" class="btn btn-custom sl-btn" data-toggle="modal"
                                                data-target="#contactpopup">Chat</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="col-lg-8 col-xl-9">
                        <div class="sl-aboutFreelance">
                            <div class="sl-title">
                                <h4>تفاصيل الخدمة</h4>
                            </div>
                            <div class="sl-aboutFreelance__description">
                                <p>{props.post.description}</p>
                            </div>
                        </div>

                        <hr></hr>
                        {console.log(props.post)}
                        <Review postId={props.post._id} comments={props.post.comments}/>

                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
  post: state.posts.choosedPost,
});
const mapDispatchToState = (dispatch) => ({
  getSinglePost: (id) => dispatch(getSingleApiPost(id)),
});

export default connect(mapStateToProps, mapDispatchToState)(PostDetails);
