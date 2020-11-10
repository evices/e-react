import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

const Contact = props => {

    const [show, setShow] = useState(false);

    return (
        <div>
                <main>
        <section class="sl-contact-page">
            <div class="ourmap">
                <div class="gm-style">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.3199142120516!2d35.8663810151157!3d31.897904135593897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca6e3c8e41335%3A0x38b7f4b7f0dc25d0!2sLuminus%20Technical%20University%20College!5e0!3m2!1sen!2s!4v1597747960294!5m2!1sen!2s" ></iframe>
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
                                    <Alert style={{width: '100%'}} show={show} variant="success">
                                        <p>
                                            شكرا لتواصلك معنا وسيتم الاتصال بك عما قريبا
                                        </p>
                                        </Alert>
                                        <div class="sl-contactform__details">
                                            <h5>نحن سعداء جدا بخدمتكم</h5>
                                            <h2>شاركنا رأيك</h2>
                                        </div>
                                        <form class="sl-formtheme sl-formcontactus" onSubmit={(e) => {e.preventDefault(); setShow(true); e.target.reset()}}>
                                            <fieldset>
                                                <div class="sl-formhalf">
                                                    <div class="form-group form-group-half">
                                                        <input type="text" name="Your Name" class="form-control"
                                                            placeholder="الاسم الاول" required/>
                                                    </div>
                                                    <div class="form-group form-group-half">
                                                        <input type="text" name="Your Email" class="form-control"
                                                            placeholder="اسم العائلة" required/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" name="Subject" class="form-control"
                                                        placeholder="البريد الالكتروني" required/>
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" placeholder="الرسالة"
                                                        required="" required></textarea>
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
                                                <p>evices</p>
                                                <span>تابعونا على فيسبوك</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li class="sl-contactsocialadress">
                                    <div class="sl-youtube">
                                        <a href="javascript:void(0);" class="fab fa-youtube">
                                            <div class="sl-contactsocialadress__description">
                                                <p>evices</p>
                                                <span>تابعونا على يوتيوب</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li class="sl-contactsocialadress">
                                    <div class="sl-twitter">
                                        <a href="javascript:void(0);" class="fab fa-twitter">
                                            <div class="sl-contactsocialadress__description">
                                                <p>evices</p>
                                                <span>تابعونا على تويتر</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li class="sl-contactsocialadress">
                                    <div class="sl-instagram">
                                        <a href="javascript:void(0);" class="fab fa-instagram">
                                            <div class="sl-contactsocialadress__description">
                                                <p>evices</p>
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

        </div>
    );
};

Contact.propTypes = {
    
};

export default Contact;