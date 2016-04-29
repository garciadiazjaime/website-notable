/* eslint max-len: [2, 500, 4] */
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
          <div className="col-sm-12 col-xs-12">
            <h2 className={style.title}>{titles.title1}</h2>
          </div>
          <div className="col-sm-3 col-xs-12">
            <h3 className={style.subtitle}>{titles.title2}</h3>
            <p className={style.paragraph} dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
          </div>
          <div className="col-sm-3 col-xs-12">
            <h3 className={style.subtitle}>{titles.title3}</h3>
            <p className={style.paragraph} dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph2)} />
          </div>
          <div className="col-sm-3 col-xs-12">
            <h3 className={style.subtitle}>{titles.title4}</h3>
            <p className={style.paragraph} dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph3)} />
          </div>
          <div className="col-sm-3 col-xs-12">
            <h3 className={style.subtitle}>{titles.title4}</h3>
            <p className={style.paragraph} dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph4)} />
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block3.propTypes = {
  data: React.PropTypes.object,
};
