import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        redirectUrl: ''
      },
      {
        number: '01',
        projectName: 'RifRex',
        projectDesc: 'A tech company focusing on minimalist, high-quality, and user-friendly product designs.',
        projectType: 'Company',
        roles: ['Co-Founder', 'Product Designer', 'Full stack developer'],
        redirectUrl: 'https://rifrex.com',
        },
        {
        number: '02',
        projectName: 'Faidee',
        projectDesc: "Mobile app and website for the world's most expensive jewelry brand.",
        projectType: 'iOS APP',
        roles: ['UI Designer', 'Front-end Developer'],
        redirectUrl: 'https://www.faidee.com'
        },
        {
        number: '03',
        projectName: 'Ruby Masterclass',
        projectDesc: 'Comprehensive course exploring the intricacies of Burmese Rubies.',
        projectType: 'iOS/Web APP',
        roles: ['UI Designer', 'Front-end Developer'],
        redirectUrl: 'https://rubymasterclass.com'
        },
        {
        number: '04',
        projectName: 'TextGPT',
        projectDesc: 'AI assistant integrated into iMessage, leveraging OpenAI\'s ChatGPT technology',
        projectType: 'Messaging AI',
        roles: ['Full stack developer'],
        redirectUrl: 'https://www.textgpt.chat'
        },
      // {
      //   number: '05',
      //   projectName: 'WhatsMyFood',
      //   projectDesc: 'iOS app to remember your fav food at each restaurant you eat.',
      //   projectType: 'iOS APP',
      //   roles: ['UI Designer', 'Front-end Developer'],
      // },
      // {
      //   number: '06',
      //   projectName: 'Voistrap',
      //   projectDesc: 'Web app project to give workplace insights using indoor localization, voice and schedule.',
      //   projectType: 'iOS APP',
      //   roles: ['UI Designer', 'Full Stack Developer'],
      // },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        redirectUrl: ''
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
        redirectUrl={this.workDetails[slideNumber].redirectUrl}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
