import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import homeImg from '../../../../Assets/Images/WhatsMyFood/Home.png';
import restaurantImg from '../../../../Assets/Images/WhatsMyFood/Restaurant.png';
import addRestaurantImg from '../../../../Assets/Images/WhatsMyFood/AddRestaurant.png';
import addFoodImg from '../../../../Assets/Images/WhatsMyFood/AddFood.png';
import TextGPT0 from '../../../../Assets/Images/TextGPT/TextGPT0.png';
import TextGPT1 from '../../../../Assets/Images/TextGPT/TextGPT1.png';
import TextGPT2 from '../../../../Assets/Images/TextGPT/TextGPT2.png';
import TextGPT3 from '../../../../Assets/Images/TextGPT/TextGPT3.png';

const Restaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 20}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 60vh; 
`;

const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 6vw;
/* border: 1px dashed red; */
height: 60vh;
filter: blur(0.6px);
`;

const AddFood = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height:60vh;
filter: blur(0.8px);
`;

const AddRestaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: 10vw;
position: absolute;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(1.2px);
`;

class WhatsMyFoodImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <AddFood src={TextGPT3} scroll={scrollPercent} alt="addFood" />
        <AddRestaurant src={TextGPT2} scroll={scrollPercent} alt="addRestaurant" />
        <Home src={TextGPT0} scroll={scrollPercent} alt="Home" />
        <Restaurant src={TextGPT1} scroll={scrollPercent} alt="Restaurant" />
      </React.Fragment>
    );
  }
}

WhatsMyFoodImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WhatsMyFoodImages;
