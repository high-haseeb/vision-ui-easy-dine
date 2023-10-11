// HorizontalMenu.js
import React, { useRef, useState } from 'react';
import VuiTypography from 'components/VuiTypography'
// HorizontalMenu.js
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';


const menues = [
    "Pizza",
    "Fish",
    "Frites",
    "Soda",
    "Steak",
    "Hookah",
    "Notifications",
    "Backup"
]


function HorizontalMenu() {

    const [selectedMenu, setSelectedMenu] = useState(0);
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <VuiBox sx={{ maxWidth: "97%" }}>
            <Slider {...settings}>
                {menues.map((menu, idx) => {
                    const isActive = idx === selectedMenu;
                    const variant = isActive ? "contained" : "text";
                    const color = isActive ? "info" : "white"
                    return (
                        <VuiButton onClick={() => setSelectedMenu(idx)} key={idx} variant={variant} color={color}>
                            <VuiTypography color="white" sx={{ fontSize: 10, }} fontWeight="bold">
                                {menu}
                            </VuiTypography>
                        </VuiButton>
                    )
                })}
            </Slider>
        </VuiBox>
    );
}

export default HorizontalMenu;
