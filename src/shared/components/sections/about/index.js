/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import Block1 from './block1';
import Block2 from './block2';
import Block3 from '../home/block3';
import Block4 from './block4';


export default class AboutSection extends React.Component {

  render() {
    const { block1, block2, block3, block4 } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <Block1 data={block1} />
      <Block2 data={block2} />
      <Block3 data={block3} />
      <Block4 data={block4} />
    </div>) : null;
  }
}

AboutSection.propTypes = {
  data: React.PropTypes.object,
};
