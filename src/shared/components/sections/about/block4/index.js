import React from 'react';
import _ from 'lodash';

import sanitizeUtil from '../../../../utils/sanitize';
// const style = require('./style.scss');


export default class Block4 extends React.Component {

  render() {
    const { titles, paragraphs } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <h2>{titles.title1.content}</h2>
          </div>
          <div className="col-sm-4 col-xs-12">
            <h3>{titles.title2.content}</h3>
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1.content)} />
          </div>
          <div className="col-sm-4 col-xs-12">
            <h3>{titles.title3.content}</h3>
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph2.content)} />
          </div>
          <div className="col-sm-4 col-xs-12">
            <h3>{titles.title4.content}</h3>
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph3.content)} />
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block4.propTypes = {
  data: React.PropTypes.object,
};
