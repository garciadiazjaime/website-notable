/* eslint max-len: [2, 500, 4] */

import React from 'react';
import _ from 'lodash';

const style = require('./style.scss');


export default class Block1 extends React.Component {

  render() {
    const { images, buttons } = this.props.data;
    const imgUrl = images && images.image1 && images.image1.src ? images.image1.src.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/contacto_map.png';
    return !_.isEmpty(this.props.data) ? (<div>
      <img cassName={style.image} src={imgUrl} alt={images.image1.alt} />
      <a className={style.button} href={buttons.button1.href} target="_blank">{buttons.button1.title}</a>
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object,
};
