import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// const style = require('./style.scss');


export default class Block1 extends React.Component {

  render() {
    const { images, buttons } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <img src={images.image1.src} alt={images.image1.alt} />
      <Link to={buttons.button1.href}>{buttons.button1.title}</Link>
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object,
};
