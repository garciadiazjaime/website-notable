import React from 'react';
import _ from 'lodash';

import sanitizeUtil from '../../../../utils/sanitize';
// const style = require('./style.scss');


export default class Block1 extends React.Component {

  render() {
    const { titles, images, paragraphs } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <h2>{titles.title1}</h2>
            <img src={images.image1.src} alt={images.image1.alt} />
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object,
};
