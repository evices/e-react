import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';

import UserPost from './post';

import './style.scss';

const Profile = props => {
    return (
        <main class="sl-main">
            <div class="sl-main-section">
                <div class="container">
                    <Tab.Container defaultActiveKey="profile">
                        <div class="row">
                            <div class="col-lg-4 col-xl-3">
                            <aside id="sl-asidebar" class="sl-asidebar">
                                <div class="sl-asideholder sl-dashboardAsideholder">
                                    <a href="javascript:void(0);" id="sl-closeasidebar" class="sl-closeasidebar">
                                        <i class="lnr lnr-layers"></i>
                                    </a>
                                    <div class="sl-asidescrollbar">
                                        <div id="sl-sidebarwrapper" class="sl-sidebarwrapper">
                                            <div class="sl-usersinfo">
                                                <div class="single-chart">
                                                    <figure class="sl-userprofileimg">
                                                        <img src="https://www.seekpng.com/png/detail/53-535515_view-original-cool-guy-cartoon-png.png" alt="img description" />
                                                    </figure>
                                                </div>
                                                <div class="sl-title">
                                                    <h3><a eventKey="home" href="javascript:void(0);"> وليد العفيفي</a></h3>
                                                </div>
                                            </div>
                                            <nav id="sl-navdashboard" class="sl-navdashboard">
                                                <ul>
                                                    <li class="sl-active">
                                                        <Nav.Link eventKey="profile"><i class="ti-user"></i><span>الملف الشخصي</span></Nav.Link>
                                                    </li>
                                                    <li>
                                                        <Nav.Link eventKey="services"><i class="ti-shopping-cart"></i><span>خدماتي</span></Nav.Link>
                                                    </li>
                                                    
                                                    <li>
                                                        <Nav.Link eventKey="messages"><i class="ti-email"></i><span>المراسلات</span></Nav.Link>
                                                    </li>
                                                    <li>
                                                        <Nav.Link eventKey="favorit"><i class="ti-heart"></i><span>المفضلة</span></Nav.Link>
                                                    </li>
                                                    <li>
                                                        <Nav.Link><i class="ti-key"></i><span>تسجييل الخروج</span></Nav.Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                            <div class="col-lg-8 col-xl-9">
                                <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                            <div class="sl-dashboardbox sl-newAppointments">
                                                <div class="sl-dashboardbox__title">
                                                    <h2>الخدمات المحجوزة</h2>
                                                </div>
                                                <div class="sl-dashboardbox__content">
                                                    <ul>
                                                    <li class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">
                                                            <div class="sl-newAppointments__detail">
                                                                <div class="sl-newAppointments__userDetail">
                                                                    <div class="sl-newAppointments__userText">
                                                                        <div class="sl-slider__tags">
                                                                            <span class="sl-bg-green">جديد</span>
                                                                        </div>
                                                                        <h5><a href="javascript:void(0);">وليد العفيفي</a></h5>
                                                                        <p>Nov 11, @ 10:30am</p>
                                                                    </div>
                                                                </div>
                                                                <div class="sl-newAppointments__services">
                                                                    <div class="sl-newAppointments__services--description">
                                                                        <h6>الخدمة المطلوبة</h6>
                                                                        <ul>
                                                                            <li><p>صيانة التمديدات الصحية</p></li>
                                                                        </ul>                                            
                                                                    </div>
                                                                    <a href="javascript:void(0);" class="btn sl-btn sl-btn-md">التفاصيل</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">
                                                            <div class="sl-newAppointments__detail">
                                                                <div class="sl-newAppointments__userDetail">
                                                                    <div class="sl-newAppointments__userText">
                                                                        <div class="sl-slider__tags">
                                                                            <span class="sl-bg-green">جديد</span>
                                                                        </div>
                                                                        <h5><a href="javascript:void(0);">وليد العفيفي</a></h5>
                                                                        <p>Nov 11, @ 10:30am</p>
                                                                    </div>
                                                                </div>
                                                                <div class="sl-newAppointments__services">
                                                                    <div class="sl-newAppointments__services--description">
                                                                        <h6>الخدمة المطلوبة</h6>
                                                                        <ul>
                                                                            <li><p>صيانة التمديدات الصحية</p></li>
                                                                        </ul>                                            
                                                                    </div>
                                                                    <a href="javascript:void(0);" class="btn sl-btn sl-btn-md">التفاصيل</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread">
                                                            <div class="sl-newAppointments__detail">
                                                                <div class="sl-newAppointments__userDetail">
                                                                    <div class="sl-newAppointments__userText">
                                                                        <div class="sl-slider__tags">
                                                                            <span class="sl-bg-green">جديد</span>
                                                                        </div>
                                                                        <h5><a href="javascript:void(0);">وليد العفيفي</a></h5>
                                                                        <p>Nov 11, @ 10:30am</p>
                                                                    </div>
                                                                </div>
                                                                <div class="sl-newAppointments__services">
                                                                    <div class="sl-newAppointments__services--description">
                                                                        <h6>الخدمة المطلوبة</h6>
                                                                        <ul>
                                                                            <li><p>صيانة التمديدات الصحية</p></li>
                                                                        </ul>                                            
                                                                    </div>
                                                                    <a href="javascript:void(0);" class="btn sl-btn sl-btn-md">التفاصيل</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="services">
                                            <UserPost />
                                        </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </main>
    );
};

Profile.propTypes = {
    
};

export default Profile;