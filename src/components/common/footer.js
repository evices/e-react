import React from 'react';

export default () => (
    <footer>
        <section className="sl-footer-section sl-footerCenter">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="sl-footerCenter__logoSection">
                <a href="/">
                    <img src="/logo.png" alt="Image Description" />
                </a>
                <p>
                    هذه المنصة تهتم باصحاب الحرف في الوقت الراهين حيث يمكن
                    للزبائن حجز الخدمة من مزود الخدمة مباشرة دون وسيط
                </p>
                <ul className="sl-brands">
                    <li>
                    <a href="javascript:void(0);">
                        <i className="fab fa-facebook-f" />
                    </a>
                    </li>
                    <li>
                    <a href="javascript:void(0);">
                        <i className="fab fa-facebook-messenger" />
                    </a>
                    </li>
                    <li>
                    <a href="javascript:void(0);">
                        <i className="fab fa-dribbble" />
                    </a>
                    </li>
                    <li>
                    <a href="javascript:void(0);">
                        <i className="fab fa-quora" />
                    </a>
                    </li>
                    <li>
                    <a href="javascript:void(0);">
                        <i className="fab fa-google-plus-g" />
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <ul className="sl-footerCenter__contact">
                <li>
                    <i className="fas fa-headphones-alt" />
                    <div className="sl-footerCenter__contact__description">
                    <p>24/7 دعم:</p>
                    <h6>
                        <a href="tel:1800123123">1800123123</a>
                    </h6>
                    </div>
                </li>
                <li>
                    <i className="fas fa-envelope" />
                    <div className="sl-footerCenter__contact__description">
                    <p>اتصل بنا</p>
                    <h6>
                        <a href="mailto:waleed-afifi@windowslive.com">
                        اضغط هنا للتواصل معنا
                        </a>
                    </h6>
                    </div>
                </li>
                </ul>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="sl-footerCenter__newsletter">
                <h6>التسجيل بالقائمة البريدية</h6>
                <form>
                    <div className="sl-input-group">
                    <input
                        className="form-control sl-form-control sl-prepend"
                        type="email"
                        placeholder="البريد الالكتروني"
                        required
                    />
                    <button
                        type="submit"
                        className="btn sl-btn sl-btn-active sl-append"
                    >
                        <i className="lnr lnr-arrow-right" />
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
        <div className="sl-footerLower">
        <div className="container">
            <div className="sl-footerLower__content">
            <p>جميع الحقوق محفوظة © 2020</p>
            </div>
        </div>
        </div>
    </footer>
);