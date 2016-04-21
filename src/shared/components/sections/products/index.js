/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import Block1 from './block1';
import Block2 from '../about/block1';
import Block3 from './block3';
import Block4 from './block4';


export default class ProductsSection extends React.Component {

  render() {
    const { block1, block2, block3, block4 } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <Block1 data={block1} />
      <Block2 data={block2} />
      <Block3 data={block3} sliderId="main-carousel-livingroom" />
      <Block3 data={block3} sliderId="main-carousel-dining" />
      <Block3 data={block3} sliderId="main-carousel-bedroom" />
      <Block4 data={block4} />
    </div>) : null;
  }
}

ProductsSection.propTypes = {
  data: React.PropTypes.object,
};
