import React, { useState, useEffect } from 'react';
import Review from '../Review';
import Modal from '../Modal';

import { connect } from "react-redux";
import { getSingleApiPost } from "../../../../store/posts";
import { sendMessage } from "../../../../store/messages";
import _ from "lodash";
import { If, Then } from 'react-if';
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/ar';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import Chat from '../../chat/Chat/Chat';

function PostDetails(props) {
    useEffect(() => {
        props.getSinglePost(window.location.pathname.split("/")[2]);
    }, []);

    const formatter = buildFormatter(frenchStrings);

    const [modalShow, setModalShow] = React.useState(false);
    const [active, setActive] = useState('');
    const [sendButton, setSendButton] = useState({value: 'مراسلة', class: ''});
    const [sendReserve, setSendReserve] = useState({value: 'حجز', class: ''});

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
                            <em><i class="ti-calendar"></i> تاريخ الانشاء: 
                                <TimeAgo date={new Date(props.post.created_at)} formatter={formatter} />
                            </em>
                        </div>
                    </div>
                </div>
                <div class="sl-appointment__note">
                <If condition={props.user ? props.user.user.username : props.post.username != props.post.username}>
                    <Then>
                    <a onClick={() => {setModalShow(true); console.log(modalShow)}} class={"btn sl-btn " + sendReserve.class} data-toggle="modal"
                        data-target="#appointmentPopup">{sendReserve.value}</a>
                        <Modal
                            post={props.post}
                            show={modalShow}
                            onHide={() =>  {
                                setSendReserve({value: 'تم الحجز بنجاح', class: 'btn-bg-green'});
                                setModalShow(false);
                                setInterval(() => {
                                    setSendReserve({value: 'حجز', class: ''});
                                }, 10000);
                            }}
                        />
                    </Then>
                </If>                        
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
                                            
                                            <If condition={props.user ? props.user.user.username : props.post.username != props.post.username}>
                                                <Then>
                                                    <a onClick={() => {setActive('___active')}} href="javascript:void(0);" class={"btn btn-custom sl-btn "+ sendButton.class} data-toggle="modal"
                                                        data-target="#contactpopup">{sendButton.value}</a>
                                                    <form className={"send-msg-form"+active}
                                                        onSubmit = {
                                                            (e) => {
                                                                e.preventDefault();
                                                                setSendButton({value: 'تم الارسال', class: 'btn-bg-green'});
                                                                props.sendMessage(props.user, props.post, e.target.msg.value);
                                                                setActive('');
                                                                e.target.reset();
                                                                setInterval(() => {
                                                                    setSendButton({value: 'مراسلة', class: ''});
                                                                }, 4000);
                                                            }
                                                        }>
                                                        <textarea class="form-control" name="msg" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        <button class="btn btn-warning">ارسال</button>
                                                    </form>

                                                    <a onClick={() => {console.log('Chat')}} href="javascript:void(0);" class="btn btn-custom chat-open sl-btn">Chat</a>
                                                </Then>
                                            </If>
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

                        <If condition={props.user ? props.user.user.username : props.post.username != props.post.username}>
                            <Then>
                                <hr></hr>
                                {console.log(props.post)}
                                <Review postId={props.post._id} comments={props.post.comments}/>
                            </Then>
                        </If>

                    </div>
                </div>
            </div>
            {/* <div className = "chat-btn">
                <a onClick={() => {console.log('change chat')}}>+</a>
            </div> */}
            <Chat location = {{name: props.user ? props.user.user.fullname : props.post.username, room: props.post.username}}/>
        </div>
    );
}
const mapStateToProps = (state) => ({
  post: state.posts.choosedPost,
  user: state.auth.user,
});
const mapDispatchToState = (dispatch) => ({
  getSinglePost: (id) => dispatch(getSingleApiPost(id)),
  sendMessage: (sender, receiver, msg)=> dispatch(sendMessage(sender, receiver, msg))
});

export default connect(mapStateToProps, mapDispatchToState)(PostDetails);
