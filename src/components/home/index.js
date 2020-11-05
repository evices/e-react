import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Category from '../category';

class Home extends Component {
    render() {
        return (
            <>
                <Slider />
                <Category />
            </>
        );
    }
}

Home.propTypes = {

};

export default Home;