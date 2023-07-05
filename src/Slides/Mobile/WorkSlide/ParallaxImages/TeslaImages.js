import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import teslaTyreImg from '../../../../Assets/Images/Tesla/Tyre.png';
import teslaHeatImg from '../../../../Assets/Images/Tesla/Heat.png';
import teslaLockImg from '../../../../Assets/Images/Tesla/Lock.png';
import teslaBatteryImg from '../../../../Assets/Images/Tesla/Battery.png';
import RubyMasterclass0 from '../../../../Assets/Images/RubyMasterclass/RubyMasterclass0.png' 
import RubyMasterclass1 from '../../../../Assets/Images/RubyMasterclass/RubyMasterclass1.png'
import RubyMasterclass2 from '../../../../Assets/Images/RubyMasterclass/RubyMasterclass2.png'
import RubyMasterclass3 from '../../../../Assets/Images/RubyMasterclass/RubyMasterclass3.png'

const Heat = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 20}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 60vh; 
`;

const Tyre = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 20.5}%) scale(0.82)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 60vh;
filter: blur(0.6px);
`;

const Battery = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(0.8px);
`;

const Lock = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 0.9}%) scale(0.55)`,
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

class TeslaImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
         <Lock src={RubyMasterclass2} scroll={scrollPercent} alt="teslaLock" />
        <Battery src={RubyMasterclass3} scroll={scrollPercent} alt="teslaBattery" />
        <Tyre src={RubyMasterclass0} scroll={scrollPercent} alt="teslaTyre" />
        <Heat src={RubyMasterclass1} scroll={scrollPercent} alt="teslaHeat" />
      </React.Fragment>
    );
  }
}

TeslaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TeslaImages;
