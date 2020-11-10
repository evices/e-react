import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const MainSlider = props => (

    <div className="sl-main-banner">
        <OwlCarousel className="owl-theme owl-carousel" id="slBannerOwl" loop autoplay autoplayTimeout={5000} margin={0} items={1} nav >
            <div className="item"> <img src="images/index/main-banner/img-01.jpg" alt="Image Description"/> </div>
            <div className="item"> <img src="images/index/main-banner/img-02.jpg" alt="Image Description"/> </div>
            <div className="item"> <img src="images/index/main-banner/img-03.jpg" alt="Image Description"/> </div>
        </OwlCarousel>

        <div className="sl-main-banner__content">
            <h1>
                <span>ابحث عن أكثر من 1000</span>مزود خدمة عصري
            </h1>
            <p />
            <div className="sl-main-banner__btn">
                <a href="/posts" className="btn sl-btn">
                عرض الكل
                </a>
                <a href="javascript:void(0);" className="btn sl-btn sl-btn-active">
                احجز الان
                </a>
            </div>
            <img
                src="images/index/main-banner/img-01.png"
                alt="Image Description"
            />
        </div>
    </div>
);

export default MainSlider;