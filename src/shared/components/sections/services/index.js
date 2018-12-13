import React from 'react';

import Block1 from '../about/block1';
import Block2 from './block2';
import Block3 from './block3';

const style = require('./style.scss');
const data = require('./data');

export default class ServicesSection extends React.Component {

  render() {
    const { block1, block2, block3 } = data;
    const block1classes = 'col-xs-12 col-sm-6 col-sm-offset-3';
    const classes = {
      svg: style.svg,
      col1: 'col-xs-12 col-sm-5 ',
      col2: 'col-xs-12 col-sm-7 ',
    };
    return (<div>
      <Block1 data={block1} classes={block1classes}/>
      <Block2 data={block2} classes={classes}/>
      <Block3 data={block3} />
    </div>);
  }
}
