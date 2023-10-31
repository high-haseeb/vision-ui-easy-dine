// HorizontalMenu.js
import React, { useRef, useState, Component } from 'react';
import VuiTypography from 'components/VuiTypography'
// HorizontalMenu.js
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';

class HorizontalMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            selectedCategory: null
        };

    }

    componentDidMount() {

        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8095/categories`);
            const jsonData = await response.json();
            this.setState({ categories: jsonData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    changeSelectedCategory = (id) => {
        this.setState({ selectedCategory: id });
    }

    render() {
    
        var { categories } = this.state;
        var { selectedCategory } = this.state;

        return (

            <VuiBox sx={{ maxWidth: "97%" }}>
                <Slider arrows={true} slidesToShow={5} infinite={false}>
                    {categories.map(category => {

                        var isActive = category.id === selectedCategory;
                        var variant = isActive ? "contained" : "text";
                        var color = isActive ? "info" : "white";

                        return (
                            <VuiButton onClick={() => this.changeSelectedCategory(category.id)} key={category.id} variant={variant} color={color}>
                                <VuiTypography color="white" sx={{ fontSize: 10 }} fontWeight="bold">
                                    {category.name}
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
