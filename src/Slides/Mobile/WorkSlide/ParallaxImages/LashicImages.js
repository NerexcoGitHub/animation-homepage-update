import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import alertImg from '../../../../Assets/Images/Lashic/Alert.png';
import taskImg from '../../../../Assets/Images/Lashic/Task.png';
import customersImg from '../../../../Assets/Images/Lashic/Customers.png';
import customerDetailImg from '../../../../Assets/Images/Lashic/CustomerDetail.png';
import Faidee0 from '../../../../Assets/Images/Faidee/Faidee0.png';
import Faidee1 from '../../../../Assets/Images/Faidee/Faidee1.png';
import Faidee2 from '../../../../Assets/Images/Faidee/Faidee2.png';
import Faidee3 from '../../../../Assets/Images/Faidee/Faidee3.png';

const Task = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Alert = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 13}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(0.6px);
`;

const CustomerDetail = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const Customers = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-105vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(1.2px);
`;

class LashicImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <CustomerDetail src={Faidee2} scroll={scrollPercent} alt="customerDetails" />
        <Customers src={Faidee3} scroll={scrollPercent} alt="customers" />
        <Alert src={Faidee1} scroll={scrollPercent} alt="Alert" />
        <Task src={Faidee0} scroll={scrollPercent} alt="Task" />
      </React.Fragment>
    );
  }
}

LashicImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default LashicImages;
