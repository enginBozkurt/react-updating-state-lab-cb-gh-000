
// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };

  }

  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  















}
