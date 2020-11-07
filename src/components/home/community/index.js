import React from 'react';
import PropTypes from 'prop-types';

const Community = props => {
    return (
        <section>
            <div className="sl-community">
                <div className="sl-overlay">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="sl-community__content sl-main-section">
                            <div className="sl-community__description">
                                <h5>نحن ننتشر يوما بعد يوم</h5>
                                <h2>انضم الى مجتمعنا اليوم</h2>
                                <p />
                            </div>
                            <div className="sl-community__btn">
                                <a
                                href="/signup"
                                className="btn sl-btn sl-btn-active"
                                >
                                سجل الان
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Community.propTypes = {
    
};

export default Community;