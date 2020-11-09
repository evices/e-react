import React, { useState, useEffect } from 'react';
import Login from '../auth/login';
import { If, Then, Else } from 'react-if';
import { connect } from 'react-redux';
import { logout } from "../../store/auth";
import { Link } from 'react-router-dom';
import {getPostsBySearch} from '../../store/posts'


const Header = (props) => {
    console.log('loggedin', props)
    const [modalShow, setModalShow] = React.useState(false);
    const [title,setTitle]=React.useState(null);
    const [categorey,setCategory]=React.useState(null)

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        setModalShow(false);
      }, [props.isLoggedIn])

    function handdelSubmit(){
console.log('submit',title,categorey);
// props.getPostsBySearch(title,categorey);

    };

    return (
        <header>
                        <div className="sl-main-header">
                <strong className="sl-main-header__logo">
                    <a href="/">
                        <img src="/logo.png" alt="Logo" />
                    </a>
                </strong>
                <div className="sl-main-header__content">
                    <div className="sl-main-header__upper">
                        <form className="sl-main-form">
                            <div className="sl-form-group sl-main-form__input1">
                                <input onChange={(e) => setTitle(e.target.value)}
                                    className="form-control sl-form-control"
                                    type="text"
                                    placeholder="ابحث" />
                            </div>
                            <div className="sl-form-group sl-main-form__input3">
                                <div className="sl-select">
                                    <select onChange={(e) => setCategory(e.target.value)}>
                                        <option hidden>التصنيفات</option>
                                        <option>خدمات السباكة</option>
                                        <option>خدمات النجارة</option>
                                        <option>خدمات السيارات</option>
                                        <option>خدمات النظافة</option>
                                        <option>خدمات الحدادة</option>

                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className="sl-input-group">
                            <a onClick={handdelSubmit}
                                href={"/posts/"+title+"/"+categorey}
                                className="btn sl-btn sl-btn-active sl-advance-btn">
                                <span>بحث</span>
                                <span>
                                    <em className="sl-advance-icon">
                                        <i />
                                        <i />
                                        <i />
                                    </em>
                                </span>
                            </a>
                        </div>
                        <div className="sl-main-form__btn">
                            <a
                                href="javascript:void(0);"
                                className="btn sl-btn sl-btn-active">
                                <i className="ti-search" />
                            </a>
                        </div>

                        <If condition={props.isLoggedIn}>
                            <Then>
                                <div className="sl-user sl-userdropdown">
                                    {/* <a onClick={() => { setModalShow(true); console.log(modalShow) }} data-toggle="modal" data-target="#loginpopup"> */}
                                    {/* <img
                                        src='../../images/insight/user-img.jpg'
                                        alt="Image Description"
                                    /> */}
                                    <span className="sl-user__description">
                                        <em className="d-block">مرحبا!</em>{props.user ? props.user.user.username : ''}
                                </span>
                                    <i className="ti-angle-down" />
                                    


                                    <ul className="sl-usermenu">
                                        <li>
                                        <Link to='/profile'>
                                            <i className="ti-user" />
                                            <span>الملف الشخصي</span>
                                        </Link>
                                        </li>
                                        <li>

                                            <a href="/" onClick={() => {console.log('insidelogout'); props.logout() }}>
                                                <i className="ti-key" />
                                                <span>تسجيل الخروج</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Then>

                            <Else>
                                <a href="#" onClick={() => { setModalShow(true); console.log(modalShow) }} data-toggle="modal" data-target="#loginpopup">
                                تسجيل دخول  
                                                    
                                </a>

                                <Login
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                    
                            </Else>

                        </If>
                        <div className="sl-main-upperBackbtn">
                            <a href="javascript:void(0);">
                                <i className="ti-close" />
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({

    isLoggedIn: state.auth.isLoggedIn,
    user : state.auth.user
});

const mapDispatchToProps = {
    logout,
    getPostsBySearch,

};


export default connect(mapStateToProps, mapDispatchToProps)(Header);