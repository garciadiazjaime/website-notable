import React from 'react';
import _ from 'lodash';

import sanitizeUtil from '../../../../utils/sanitize';
const style = require('./style.scss');


export default class Block3 extends React.Component {

  render() {
    const { titles, paragraphs } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <h2 className={style.title2}>{titles.title1}</h2>
  <p className={style.paragraph1} dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block3.propTypes = {
  data: React.PropTypes.object,
};
