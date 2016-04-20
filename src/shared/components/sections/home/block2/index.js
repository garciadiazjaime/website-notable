import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import sanitizeUtil from '../../../../utils/sanitize';
// const style = require('./style.scss');


export default class Block2 extends React.Component {

  render() {
    const { titles, images, paragraphs, buttons } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <h2>{titles.title1.content}</h2>
            <img src={images.image1.src} alt={images.image1.alt} />
            <Link to={buttons.button1.href}>{buttons.button1.title}</Link>
          </div>
          <div className="col-sm-4 col-xs-12">
            <h2>{titles.title2.content}</h2>
            <img src={images.image2.src} alt={images.image2.alt} />
            <Link to={buttons.button2.href}>{buttons.button2.title}</Link>
          </div>
          <div className="col-sm-4 col-xs-12">
            <h2>{titles.title3.content}</h2>
            <img src={images.image3.src} alt={images.image3.alt} />
            <Link to={buttons.button3.href}>{buttons.button3.title}</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <h1>{titles.title3.content}</h1>
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1.content)} />
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block2.propTypes = {
  data: React.PropTypes.object,
};
