import React, { useState } from 'react';
import Login from '../auth/login';

export default () => {
    const [modalShow, setModalShow] = React.useState(false);

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
                                <input
                                    className="form-control sl-form-control"
                                    type="text"
                                    placeholder="ابحث"/>
                            </div>
                            <div className="sl-form-group sl-main-form__input3">
                                <div className="sl-select">
                                    <select>
                                        <option hidden>التصنيفات</option>
                                        <option>خدمات الصيانة</option>
                                        <option>خدمات النجارة</option>
                                        <option>خدمات الحدادة</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className="sl-input-group">
                            <a
                                href="javascript:void(0);"
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
                        <div className="sl-user sl-userdropdown">
                            <a onClick={() => {setModalShow(true); console.log(modalShow)}} data-toggle="modal" data-target="#loginpopup">
                                <img
                                    src='../../images/insight/user-img.jpg'
                                    alt="Image Description"
                                />
                                <span className="sl-user__description">
                                    <em className="d-block">مرحبا!</em>Waleed
                                </span>
                                <i className="ti-angle-down" />
                            </a>
                            <Login
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />           
                            <ul className="sl-usermenu">
                                <li>
                                    <a href="dashboard-profile-settings.html">
                                        <i className="ti-user" />
                                        <span>الملف الشخصي</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">
                                    <i className="ti-key" />
                                    <span>تسجيل الخروج</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
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