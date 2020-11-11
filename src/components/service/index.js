import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addPost, getPostsByUserName } from '../../store/posts';

const Service = (props) => {
    const [post, setPost] = useState('')
    // const post = props.post || [];

    useEffect(() => {
        console.log('test');
        props.getPostsByUserName();
    }, [post]);

    console.log('props',props.onHide)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const user = JSON.parse(localStorage.getItem("user"));
    // console.log('user', props.addPost(title, description, category))

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('service.log', title, description, category)
        props.addPost(title, description, category).then(res => {
            setPost(res.data)
            console.log('setpost',post)
            props.onHide()

        })
    }

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    خدمة جديدة
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form class="sl-formtheme sl-formlogin" onSubmit={handleSubmit} >
                    <fieldset>
                        {/* <div class="form-group">
                            <input type="text" name="email" class="form-control sl-form-control" placeholder="اسم المستخدم" onChange={(e) => setUsername(e.target.value)} value={user.user.username} />
                        </div> */}
                        <div class="form-group">
                            <input required type="text" class="form-control sl-form-control" placeholder="العنوان" onChange={(e) => {setTitle(e.target.value); setPost(e.target.value)}} />
                        </div>
                        <div class="form-group">
                            <textarea required class="form-control sl-form-control" placeholder="وصف الخدمة" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div class="form-group">
                        <select required class="form-control sl-form-control" onChange={(e) => setCategory(e.target.value)}>
                                        <option hidden>التصنيفات</option>
                                        <option>خدمات السباكة</option>
                                        <option>خدمات النجارة</option>
                                        <option>خدمات السيارات</option>
                                        <option>خدمات النظافة</option>
                                        <option>خدمات الحدادة</option>

                                    </select>
                        </div>
                 
                        <div class="form-group sl-btnarea">
                            <Button
                                className='btn btn-custom sl-btn'
                                title='login'
                                variant='link'
                                type='submit'

                            >ارسال</Button>
                            {/* <a href="dashboard-insight.html" class="btn btn-custom sl-btn">login</a> */}
                        </div>
                    </fieldset>
                </form>
                {/* <div class="sl-loginicon">
                <ul> */}
                {/* <li><a href="javascript:void(0);" class="sl-facebookbox"><i class="fab fa-facebook-f"></i>Via facebook</a></li> */}
                {/* <li><a href="http://localhost:3002/google" class="sl-googlebox"><i class="fab fa-google"></i>التسجيل بواسطة جوجل</a></li>
                </ul>
            </div> */}
            </Modal.Body>
        </Modal>
    )
}



const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    // makeReservation: (post,user, date, address) => dispatch(makeReservation(post, user, date, address)),
    // addPost :(title, description, category)=>dispatch(addPost(title, description, category))
    addPost,
    getPostsByUserName
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
