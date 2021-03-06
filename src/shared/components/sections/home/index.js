/* eslint max-len: [2, 500, 4] */
import React from 'react';

import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';
import Block4 from './block4';

const style = require('./style.scss');
const data = require('./data');

export default class HomeSection extends React.Component {

  render() {
    const { block1, block2, block3, block4 } = data;
    const block3Styles = {
      title1: style.title2,
      paragraph1: style.paragraph1,
    };
    return (<div>
      <Block1 data={block1} />
      <Block2 data={block2} />
      <Block3 data={block3} style={block3Styles} />
      <Block4 data={block4} />
    </div>);
  }
}
