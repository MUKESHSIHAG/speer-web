import React from 'react';
import Perks from './perks';
import Footer from './footer';
import Red from './red';
import ReviewPage from './reviewPage';
import Purchase from './purchase';
import Slider from './slider';

function Main(props) {

return (
        <div>
            <Slider />
            <Red />
            <Perks />
            <ReviewPage />
            <Purchase />
            <Footer />
        </div>
    );
}

export default Main;