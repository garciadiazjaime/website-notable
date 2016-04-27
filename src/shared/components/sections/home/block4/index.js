import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const style = require('./style.scss');


export default class Block4 extends React.Component {

  render() {
    const { titles, buttons } = this.props.data;
    const divStyle = {
      backgroundImage: 'url(/images/img_showroom.jpg)',
    };
    return !_.isEmpty(this.props.data) ? (<div className={style.wrapper2} style={divStyle}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <h2 className={style.mainTitle}>{titles.title1}</h2>
            <Link className={style.button2} to={buttons.button1.href}>{buttons.button1.title}</Link>
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block4.propTypes = {
  data: React.PropTypes.object,
};
