import React from 'react';
import Slider from './slider';
import Details from './Details';

export default () => (
    <>
        <Slider />
        <main className="sl-main z-index">
            <div className="container">
                <Details />
            </div>
        </main>
    </>
)