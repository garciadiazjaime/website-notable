/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import SVG from '../../../svg';
import setImageAsBackground from '../../../../utils/setImageAsBackground';
import sanitizeUtil from '../../../../utils/sanitize';
const style = require('./style.scss');


export default class Block1 extends React.Component {

  render() {
    const { titles, paragraphs, images } = this.props.data;
    const divStyle = setImageAsBackground(images.image1);
    return !_.isEmpty(this.props.data) ? (<div style={divStyle} className={style.mainbanner}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <h2 className={style.title3}>{titles.title1}</h2>
            <p className={style.paragraph3} dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
            <Link to="/inicio">
              <SVG network="double_arrow_down" className={style.svg}/>
            </Link>
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object,
};
