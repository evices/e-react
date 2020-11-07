import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { addReservation } from "../../../../store/posts";
import { Auth } from '../../../../store/checkAuth'
import Button from 'react-bootstrap/Button';
import { If, Then, Else } from 'react-if';
import { getSingleApiPost } from "../../../../store/posts";

import _ from "lodash";

const Reviewe = (props) => {

    const [comment, setComment] = useState('');
    const comments = props.comments || [];

    useEffect(() => {
        props.getSinglePost(window.location.pathname.split("/")[2]);
    }, [comment]);
    
    const [rate, setRate] = useState(0);
    console.log('props',props);

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let rData = {
            "username": props.user.username,
            "comments": e.target['comment'].value,
            "rate": rate
        };

        console.log(rate);
        console.log('Console when ttry to add comment');
        addReservation(props.postId, rData).then((res) => {
            setComment(''); 
        });

        
    }

    return (
        <div class="sl-customerReviews">
            <div class="sl-title">
                <h4>تعليقات العملاء</h4>
            </div>
            <div class="sl-posts">

                {comments.map((post, i) => {
                    let d = new Date(post.created_date);
                    return (
                        <div class="sl-post">
                            <div class="sl-post__content">
                                <div class="sl-round">
                                    <h4>{post.username.slice(0, 2)}</h4>
                                </div>
                                <div class="">
                                    {_.times(post.rate, (x) => (
                                        <span class="fa fa-star checked"></span>
                                    ))}
                                    {_.times(5 - post.rate, (x) => (
                                        <span class="fa fa-star"></span>
                                    ))}
                                    <h5>{post.username}</h5>
                                    <p>{d.toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div class="sl-post__description">
                                <p>{post.comments}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        <If condition={props.isLoggedIn}>
                <Then>
                    <Auth capability="create">
                        <form onSubmit={handleSubmit}>
                            <input class="star star-5" id="star-5" type="radio" name="star" onClick={() => { setRate(5) }} />
                            <label class="star star-5" for="star-5"></label>
                            <input class="star star-4" id="star-4" type="radio" name="star" onClick={() => { setRate(4) }} />
                            <label class="star star-4" for="star-4"></label>
                            <input class="star star-3" id="star-3" type="radio" name="star" onClick={() => { setRate(3) }} />
                            <label class="star star-3" for="star-3"></label>
                            <input class="star star-2" id="star-2" type="radio" name="star" onClick={() => { setRate(2) }} />
                            <label class="star star-2" for="star-2"></label>
                            <input class="star star-1" id="star-1" type="radio" name="star" onClick={() => { setRate(1) }} />
                            <label class="star star-1" for="star-1"></label>
                            <textarea value={comment} onChange={handleChange} name="comment"></textarea>
                            <Button type="submit" className="comment-button" variant="info">ارسال</Button>
                        </form>
                    </Auth>
                </Then>
            </If>
        </div>
    )
};

const mapStateToProps = (state) => ({
    post: state.posts.choosedPost,
    isLoggedIn: state.auth.isLoggedIn,
    auth:state.checkAuth,
    user: state.auth.user.user
});
const mapDispatchToState = (dispatch) => ({
    addReservation: (_id, reservationData) => dispatch(addReservation(_id, reservationData)),
    Auth:()=>dispatch( Auth()),
    getSinglePost: (id) => dispatch(getSingleApiPost(id)),
});

export default connect(mapStateToProps, mapDispatchToState)(Reviewe);