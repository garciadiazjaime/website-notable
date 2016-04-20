/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';

// import data from './data';

export default class HomeSection extends React.Component {

  render() {
    const { data } = this.props;
    return !_.isEmpty(this.props.data) ? (<div>
      <Block1 data={data.block1} />
      <Block2 data={data.block2} />
      <Block3 data={data.block3} />
    </div>) : null;
  }
}

HomeSection.propTypes = {
  data: React.PropTypes.object,
};
