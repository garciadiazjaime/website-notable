/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import Carousel from '../../../elements/carousel';
import sanitizeUtil from '../../../../utils/sanitize';
const style = require('./style.scss');


export default class Block3 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const className = index === 0 ? 'active' : '';
        const imgUrl = item.image.length ? item.image.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/demo.png';
        return (<div className={'item ' + className + ' ' + (style.item || '')} key={index}>
          <div className="container-fluid">
            <div className="row">
              <div className={'col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-10px col-md-10-offset-1 ' + style.heightFix}>
                <div className={style.vCenter}>
                  <img src={imgUrl} alt={item.title} />
                  <h3 className={style.title}>{item.title}</h3>
                  <p dangerouslySetInnerHTML={sanitizeUtil(item.content)} />
                  <Link to={item.button_url} title={item.button_title} className={style.btn1}>
                    {item.button_title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>);
      });
    }
    return null;
  }

  render() {
    const { sliderId } = this.props;
    const { slides, titles } = this.props.data;
    const carouselClasses = {
      inner: style.inner,
      controls: {
        base: style.controls,
        prev: style.prev,
        next: style.next,
      },
    };
    return _.isArray(slides) && slides.length && titles ? (<div>
      <div>
        <h2>{titles.title1}</h2>
      </div>
      <Carousel id={sliderId} interval={8000} indicators={false} classes={carouselClasses}>
        {this.renderItems(slides)}
      </Carousel>
    </div>) : null;
  }
}

Block3.propTypes = {
  data: React.PropTypes.object,
  sliderId: React.PropTypes.string.isRequired,
};
