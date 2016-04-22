import React from 'react';
import _ from 'lodash';

import Block1 from '../about/block1';
import Block2 from '../about/block2';
import Block3 from './block3';

export default class ServicesSection extends React.Component {

  render() {
    const { block1, block2, block3 } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <Block1 data={block1} />
      <Block2 data={block2} />
      <Block3 data={block3} />
    </div>) : null;
  }
}

ServicesSection.propTypes = {
  data: React.PropTypes.object,
};
