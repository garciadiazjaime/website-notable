import React from 'react';
import _ from 'lodash';

import sanitizeUtil from '../../../../utils/sanitize';
// const style = require('./style.scss');


export default class Block3 extends React.Component {

  render() {
    const { titles, paragraphs } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <h2>{titles.title1}</h2>
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block3.propTypes = {
  data: React.PropTypes.object,
};
