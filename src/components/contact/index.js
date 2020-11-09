import React from 'react';

export default () => (
    <main>
        <section class="sl-contact-page">
            <div class="ourmap">
                <div class="gm-style">
                    <iframe
                        src="https://maps.google.com/maps?q=31.4953024,34.3999752&hl=es;z=14&amp;output=embed" ></iframe>
                </div>
            </div>
            <div class="sl-contactformmap">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="sl-contactfrm-container">
                                <div class="sl-lg-none col-xl-5">
                                    <div class="sl-contactformimg row">
                                        <figure>
                                            <img src="https://image.freepik.com/free-photo/office-man-holding-up-phone_124595-424.jpg" alt="image" />
                                        </figure>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-7">
                                    <div class="sl-contactform row">
                                        <div class="sl-contactform__details">
                                            <h5>نحن سعداء جدا بخدمتكم</h5>
                                            <h2>شاركنا رأيك</h2>
                                        </div>
                                        <form class="sl-formtheme sl-formcontactus">
                                            <fieldset>
                                                <div class="sl-formhalf">
                                                    <div class="form-group form-group-half">
                                                        <input type="text" name="Your Name" class="form-control"
                                                            placeholder="الاسم الاول" />
                                                    </div>
                                                    <div class="form-group form-group-half">
                                                        <input type="text" name="Your Email" class="form-control"
                                                            placeholder="اسم العائلة" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" name="Subject" class="form-control"
                                                        placeholder="البريد الالكتروني" />
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" placeholder="الرسالة"
                                                        required=""></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn sl-btn">ارسال</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                        <ul class="sl-contactusform">
                                            <li>
                                                <div class="sl-contactusform__description">
                                                    <p>
                                                        <a href="mailto:info@evices.com">info@evices.com</a>
                                                    </p>
                                                    <span>نسعد بتواصلكم</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sl-contactusform__description">
                                                    <p>0800-1234-567</p>
                                                    <span>متاحين 24/7</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sl-contactusform__description">
                                                    <p>غزة, فلسطين</p>
                                                    <span>مكاننا</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul class="sl-sociallisting">
                                <li class="sl-contactsocialadress">
                                    <div class="sl-facebook">
                                        <a href="javascript:void(0);" class="fab fa-facebook-f">
                                            <div class="sl-contactsocialadress__description">
                                                <p>/evices</p>
                                                <span>تابعونا على فيسبوك</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li class="sl-contactsocialadress">
                                    <div class="sl-youtube">
                                        <a href="javascript:void(0);" class="fab fa-youtube">
                                            <div class="sl-contactsocialadress__description">
                                                <p>/evices</p>
                                                <span>تابعونا على يوتيوب</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li class="sl-contactsocialadress">
                                    <div class="sl-twitter">
                                        <a href="javascript:void(0);" class="fab fa-twitter">
                                            <div class="sl-contactsocialadress__description">
                                                <p>/evices</p>
                                                <span>تابعونا على تويتر</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li class="sl-contactsocialadress">
                                    <div class="sl-instagram">
                                        <a href="javascript:void(0);" class="fab fa-instagram">
                                            <div class="sl-contactsocialadress__description">
                                                <p>/evices</p>
                                                <span>تابعونا على انسغرام</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
)