/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import SVG from '../../../svg';
import sanitizeUtil from '../../../../utils/sanitize';
const style = require('./style.scss');

export default class Block2 extends React.Component {

  render() {
    const { titles, images, paragraphs, buttons } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div className={style.commitment}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <SVG network="circled_brand" className={style.svg}/>
            <h2 className={style.title7}>{titles.title1}</h2>
            <p className={style.paragraph2} dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
            <Link className={style.button1} to={buttons.button1.href}>{buttons.button1.title}</Link>
          </div>
          <div className="col-xs-12 col-sm-6">
            <img src={images.image1.src} alt={images.image1.alt} />
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block2.propTypes = {
  data: React.PropTypes.object,
};
