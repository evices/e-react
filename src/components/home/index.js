import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Category from '../category';
import Community from './community';
import FeaturedServices from './Featured';

class Home extends Component {
    render() {
        return (
            <>
                <Slider />
                <Category />
                <Community />
                <FeaturedServices />
            </>
        );
    }
}

Home.propTypes = {

};

export default Home;