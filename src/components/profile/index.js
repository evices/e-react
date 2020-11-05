import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Profile = props => {
    return (
        <main class="sl-main">
        <div class="sl-main-section">
            <div class="container">
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
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3V72SLE9waNYR9_8Ieu7fARrl1BkEckXp-A&usqp=CAU" alt="img description" />
                                                </figure>
                                            </div>
                                            <div class="sl-title">
                                                <h3><a href="javascript:void(0);"> وليد العفيفي</a></h3>
                                            </div>
                                        </div>
                                        <nav id="sl-navdashboard" class="sl-navdashboard">
                                            <ul>
                                                <li class="sl-active">
                                                    <a href="dashboard-insight.html">
                                                        <i class="ti-user"></i><span>الملف الشخصي</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="dashboard-vendor.html">
                                                        <i class="ti-shopping-cart"></i><span>خدماتي</span>
                                                    </a>
                                                </li>
                                                
                                                <li>
                                                    <a href="dashboard-inbox.html">
                                                        <i class="ti-email"></i><span>المراسلات</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="dashboard-my-favorites.html">
                                                        <i class="ti-heart"></i><span>المفضلة</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index.html">
                                                        <i class="ti-key"></i><span>تسجييل الخروج</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="col-lg-8 col-xl-9">
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
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
};

Profile.propTypes = {
    
};

export default Profile;