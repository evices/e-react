import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';
import Reservation from './reservation'
import UserPost from './post';
import { Auth } from "../../store/checkAuth";
import FetchUser from "./fetch-profile"
import './style.scss';

const Profile = props => {
    const user = JSON.parse(localStorage.getItem("user"));

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
                                                        <img src={user.user ? user.user.user_image : "https://www.seekpng.com/png/detail/53-535515_view-original-cool-guy-cartoon-png.png"} alt="img description" />
                                                    </figure>
                                                </div>
                                                <div class="sl-title">
                                                    <h3><a eventKey="home" href="javascript:void(0);">{user.user.fullname}</a></h3>
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
                                                        <Nav.Link eventKey="reservation"><i class="ti-shopping-cart"></i><span>الحجوزات</span></Nav.Link>
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
                                        <Tab.Pane eventKey="reservation">
                                            <div class="sl-dashboardbox sl-newAppointments">
                                                <div class="sl-dashboardbox__title">
                                                    <p>الخدمات المحجوزة</p>
                                                </div>
                                                <div class="sl-dashboardbox__content">
                                                    <ul>
                                                        <Auth capability="update">
                                                            <Reservation/>
                                                        </Auth>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="services">
                                            <UserPost />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="profile">
                                            <FetchUser />
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