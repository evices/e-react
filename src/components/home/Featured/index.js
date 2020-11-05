import React from 'react';
import PropTypes from 'prop-types';
import FeaturedServices from './FeaturedItem';

const Featured = props => {
    return (
        <section className="sl-main-section">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-9 col-xl-8">
                    <div className="sl-sectionHead">
                    <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                        <h2>الخدمات المميزة</h2>
                    </div>
                    <div className="sl-sectionHead__description">
                        <p />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <FeaturedServices />

        </section>
    );
};

Featured.propTypes = {
    
};

export default Featured;