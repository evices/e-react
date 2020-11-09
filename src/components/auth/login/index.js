import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { login } from "../../../store/auth";
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

const clientId = '82394101385-jaqm9i6p3cdu3i374lgg1b9ao6gfnpe3.apps.googleusercontent.com';

const LogIn = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const responseGoogle = (response) => {
        console.log(response);
        let obj=response.profileObj
        let username=obj.email;
        // let email=obj.email;
        let password='1234';
        // let role='user';
        // let phone='';
        // let fullname=obj.name
        console.log('index.log', username, password)
        props.login(username, password)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('index.log', username, password)
        props.login(username, password)
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
                    تسجيل الدخول
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form class="sl-formtheme sl-formlogin" onSubmit={handleSubmit}>
                    <fieldset>
                        <div class="form-group">
                            <input type="text" name="email" class="form-control sl-form-control" placeholder="اسم المستخدم" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control sl-form-control" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="form-group sl-btnarea">
                            <Button
                                className='btn btn-custom sl-btn'
                                title='login'
                                variant='link'
                                type='submit'

                            >تسجيل الدخول</Button>
                            {/* <a href="dashboard-insight.html" class="btn btn-custom sl-btn">login</a> */}
                        </div>
                    </fieldset>
                </form>
                <div class="sl-loginicon">
                    <ul>
                        {/* <li><a href="javascript:void(0);" class="sl-facebookbox"><i class="fab fa-facebook-f"></i>Via facebook</a></li> */}
                        <li><a href="http://localhost:3002/google" class="sl-googlebox"><i class="fab fa-google"></i>التسجيل بواسطة جوجل</a></li>

                        <GoogleLogin
                            clientId="608083262418-ap6mi6c6kfv279kcekpdal7d4e8gk8ai.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            isSignedIn={true}

                        />
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
    )
}



const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
