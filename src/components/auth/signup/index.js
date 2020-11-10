import React from 'react';
import { useState } from 'react';
import { register } from "../../../store/auth";
import { connect } from 'react-redux';

import { GoogleLogin } from 'react-google-login';


import  Redirect from 'react-router-dom'


const SignUp = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(' ');
    const [role, setRole] = useState(' ');
    const [phone, setPhone] = useState(' ');
    const [fullname, setFullname] = useState(' ');


    const responseGoogle =async (response) => {
        console.log(response.profileObj);
        let obj=response.profileObj
        let username=obj.email;
        let email=obj.email;
        let password='1234';
        let role='user';
        let phone='';
        let fullname=obj.name
        console.log('index.log', username, email, password, role, phone, fullname)


        props.register(username, email, password, role, phone, fullname).then(res => {
            console.log(res);
            return props.history.push('/');
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('index.log', username, email, password)
        props.register(username, email, password, role, phone, fullname).then(res => {
            console.log(res);
            return props.history.push('/');
        })
    }

    return (
        <main class="sl-main sl-register-main">
            <div class="sl-registerfixed">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="sl-register-holder">
                                <div class="sl-registerarea">
                                    <div class="sl-registersignarea">
                                        <div class="sl-registersignarea__title">
                                            <h3>سجل اليوم مجانا</h3>
                                        </div>
                                        <div class="tab-content sl-signup" id="pills-tabContent">
                                            <div class="tab-pane fade active show" id="signupprovider" role="tabpanel"
                                                aria-labelledby="sl-signupprovider">
                                                <form class="sl-formtheme sl-signupform" onSubmit={handleSubmit}>
                                                    <fieldset>
                                                        <div class="sl-signupform-wrap">
                                                            <div class="form-group form-group-half form-group-icon">
                                                                <i class="ti-info-alt toltip-content tipso_style"
                                                                    data-tipso="name"></i>
                                                                <input type="text" name="name"
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اسم المستخدم" required="" onChange={(e) => setUsername(e.target.value)} />
                                                            </div>
                                                            <div class="form-group form-group-half form-group-icon">
                                                                <i class="ti-info-alt toltip-content tipso_style"
                                                                    data-tipso="name"></i>
                                                                <input type="text" name="nickname"
                                                                    class="form-control sl-form-control"
                                                                    placeholder="الاسم الاول والعائلة" required="" onChange={(e) => setFullname(e.target.value)}/>
                                                            </div>
                                                            <div class="form-group">
                                                                <input type="text" name="email"
                                                                    class="form-control sl-form-control"
                                                                    placeholder="البريد الالكتروني" required="" onChange={(e) => setEmail(e.target.value)}/>
                                                            </div>
                                                            
                                                            <div class="form-group form-group-half">
                                                                <div class="sl-select">
                                                                    <select onChange={(e) => setRole(e.target.value)}>
                                                                        <option hidden="">نوع المستخدم</option>
                                                                        <option value="user">زبون</option>
                                                                        <option value="seller">مقدم خدمة</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="number" name="Phone"
                                                                    class="form-control sl-form-control"
                                                                    placeholder="رقم الهاتف" required="" onChange={(e) => setPhone(e.target.value)}/>
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="password" name="password"
                                                                    class="form-control sl-form-control"
                                                                    placeholder="كلمة المرور" required="" onChange={(e) => setPassword(e.target.value)}/>
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="password" name="password"
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اعادة كلمة المرور" required="" />
                                                            </div>
                                                            <div class="form-group sl-btnarea">
                                                                <div class="sl-checkbox">
                                                                    <input id="terms" type="checkbox" name="category" />
                                                                    <label for="terms">
                                                                        <span>اوافق على <a href="javascript:void(0);">شروط الخدمة</a></span>
                                                                    </label>
                                                                </div>
                                                                <button type="submit" class="btn sl-btn">تسجيل</button>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="sl-oroption">
                                            <span></span>
                                        </div>
                                        <div class="sl-loginicon">
                                            <ul>
                                                <li>
                                                    {/* <a href="javascript:void(0);" class="sl-googlebox"><i
                                                    class="fab fa-google"></i>التسجيل جوجل</a>
                                                     */}
                                                <GoogleLogin
                                                    clientId="608083262418-ap6mi6c6kfv279kcekpdal7d4e8gk8ai.apps.googleusercontent.com"
                                                    buttonText="التسجيل بواسطة جوجل"
                                                    onSuccess={responseGoogle}
                                                    onFailure={responseGoogle}
                                                    cookiePolicy={'single_host_origin'}

                                                />

                                                    </li>

                                                    
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="sl-registerarea__terms">
                                        <p>من خلال التسجيل في الموقع فانت توافق على <a href="javascript:void(0);">الشروط</a></p>
                                    </div>
                                    <div class="sl-registerarea__footer">
                                        <p> لديك عضوية قم <a href="/"> بتسجيل الدخول</a></p>
                                    </div>
                                </div>
                                <div class="sl-registercontent">
                                    <figure class="sl-registercontent__img">
                                        <img src="images/img-011.jpg" alt="img" />
                                        <figcaption>
                                            <strong class="sl-registerlogo">
                                                <a href="index.html"><img src="/logo.png"
                                                    alt="Images Description" /></a>
                                            </strong>
                                            <div class="sl-registertitle">
                                                <h4>نحن نتوسع يوما بعد يوم</h4>
                                                <h2>انضم الينا اليوم</h2>
                                            </div>
                                            <div class="sl-descritpion">
                                                <p></p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="backstretch">
                      <div class="backstretch-item"><img alt="" src="images/main-bg.jpg" />
                    </div>
                </div>
            </div>
                  

        </main>
    )


};



const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    register
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
