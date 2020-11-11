import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default () => (
    <div className="sl-inner-banner">
        {/* <div id="serviceProviderSingleBanner" className="owl-carousel owl-theme sl-owl-nav"> */}
            <OwlCarousel className="owl-theme owl-carousel" id="slBannerOwl" loop autoplay autoplayTimeout={5000} margin={0} items={3} nav autoPlay>
                <div className="item"> <img src="https://image.freepik.com/free-photo/planing-board-workshop_1098-14709.jpg" alt="Image Description"/> </div>
                <div className="item"> <img src="https://image.freepik.com/free-photo/carpenter-working-with-equipment-wooden-table-carpentry-shop_1418-2443.jpg" alt="Image Description"/> </div>
                <div className="item"> <img src="https://image.freepik.com/free-photo/worker-installing-doors_8595-1662.jpg" alt="Image Description"/> </div>
                <div className="item"> <img src="https://image.freepik.com/free-photo/people-renovating-house-concept_53876-20664.jpg" alt="Image Description"/> </div>
            </OwlCarousel>
        {/* </div> */}
    </div>
);