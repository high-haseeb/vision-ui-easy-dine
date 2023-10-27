// HorizontalMenu.js
import React, { useRef, useState, Component } from 'react';
import VuiTypography from 'components/VuiTypography'
// HorizontalMenu.js
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true
};


class HorizontalMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menues: [],
            selectedMenu: null
        };

    }

    componentDidMount() {

        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8095/categories`);
            const jsonData = await response.json();
            this.setState({ menues: jsonData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    changeSelectedMenu = (id) => {
        this.setState({ selectedMenu: id })

        

    }

    render() {
        const { menues } = this.state;
        var { selectedMenu } = this.state;

        return (

            <VuiBox sx={{ maxWidth: "97%" }}>
                <Slider arrows={true} slidesToShow={5} infinite={false}>
                    {menues.map(menu => {
                        const isActive = menu.id === selectedMenu;
                        const variant = isActive ? "contained" : "text";
                        const color = isActive ? "info" : "white"
                        return (
                            <VuiButton onClick={() => this.changeSelectedMenu(menu.id)} key={menu.id} variant={variant} color={color}>
                                <VuiTypography color="white" sx={{ fontSize: 10 }} fontWeight="bold">
                                    {menu.name}
                                </VuiTypography>
                            </VuiButton>
                        )
                    })}
                </Slider>
            </VuiBox>

        );
    }
}

export default HorizontalMenu;
