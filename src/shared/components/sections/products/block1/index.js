/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import Carousel from '../../../elements/carousel';

import sanitizeUtil from '../../../../utils/sanitize';
const style = require('./style.scss');


export default class Block1 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const className = index === 0 ? 'active' : '';

        return (<div className={'item ' + style.slide + ' ' + className + ' ' + (style.item || '')} key={index} style={{ backgroundImage: ' url("/images/nosotros_banner_s1_bed.png")' }}>
        </div>);
      });
    }
    return null;
  }

  render() {
    const { slides, titles, paragraphs, buttons } = this.props.data;
    const carouselClasses = {
      inner: style.inner,
      controls: {
        base: style.controls,
        prev: style.prev,
        next: style.next,
      },
    };
    return _.isArray(slides) && slides.length && titles ? (<div>
      <Carousel id="main-carousel2" interval={8000} indicators={false} classes={carouselClasses}>
        {this.renderItems(slides)}
      </Carousel>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-5">
            <div className={style.overbanner}>
              <div className={style.vCenter}>
                <h1 className={style.title}>{titles.title1}</h1>
                <h2 className={style.subtitle}>{titles.title2}</h2>
                <p className={style.paragraph}dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
                <Link className={style.button} to={buttons.button1.href} title={buttons.button1.title}>
                  {buttons.button1.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object,
};
