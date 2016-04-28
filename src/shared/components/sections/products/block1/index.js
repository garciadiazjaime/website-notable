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
        const imgUrl = item.image.length ? item.image.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/demo.png';

        return (<div className={'item ' + className + ' ' + (style.item || '')} key={index}>
            <img src={imgUrl} alt={item.title} />
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
      <div>
        <h1>{titles.title1}</h1>
        <h2>{titles.title2}</h2>
        <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
        <Link to={buttons.button1.href} title={buttons.button1.title} className={style.btn1}>
          {buttons.button1.title}
        </Link>
      </div>
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object,
};
