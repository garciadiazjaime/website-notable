import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// const style = require('./style.scss');


export default class Block4 extends React.Component {

  render() {
    const { titles, images, buttons } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <h2>{titles.title1}</h2>
            <img src={images.image1.src} alt={images.image1.alt} />
            <Link to={buttons.button1.href}>{buttons.button1.title}</Link>
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block4.propTypes = {
  data: React.PropTypes.object,
};
