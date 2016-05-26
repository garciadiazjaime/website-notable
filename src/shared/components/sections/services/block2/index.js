/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import SVG from '../../../svg';
import sanitizeUtil from '../../../../utils/sanitize';
import Carousel from '../../../elements/carousel';
import setImageAsBackground from '../../../../utils/setImageAsBackground';
const style = require('./style.scss');

export default class Block2 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const className = index === 0 ? 'active' : '';
        const divStyle = setImageAsBackground(item.image);
        return (<div className={'item ' + className + ' ' + (style.item || '')} key={index} style={divStyle} />);
      });
    }
    return null;
  }

  render() {
    const { titles, slides, paragraphs, buttons } = this.props.data;
    const classes = this.props.classes;
    const carouselClasses = {
      inner: style.inner,
      controls: {
        base: style.controls,
        prev: style.prev,
        next: style.next,
      },
    };
    return !_.isEmpty(this.props.data) ? (<div className={style.commitment}>
      <div className={'container-fluid ' + style.wrapper}>
        <div className="row">
          <div className={classes.col1}>
            <SVG network="circled_brand" className={style.svg + ' ' + classes.svg}/>
            <h2 className={style.title7}>{titles.title1}</h2>
            <p className={style.paragraph2} dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
            <Link className={style.button1} to={buttons.button1.href}>{buttons.button1.title}</Link>
          </div>
          <div className={classes.col2}>
            <Carousel id="carousel-services-block2" interval={8000} indicators={false} classes={carouselClasses}>
              {this.renderItems(slides)}
            </Carousel>
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block2.propTypes = {
  data: React.PropTypes.object,
  classes: React.PropTypes.object,
};
