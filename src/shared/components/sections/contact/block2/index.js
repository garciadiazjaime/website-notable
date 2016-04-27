import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import sanitizeUtil from '../../../../utils/sanitize';
// const style = require('./style.scss');

import Form from '../forms/form1';


export default class Block2 extends React.Component {

  render() {
    const { titles, paragraphs, buttons } = this.props.data;
    return !_.isEmpty(this.props.data) ? (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <h2>{titles.title1}</h2>
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph1)} />
            <Link to={buttons.button1.href}>{buttons.button1.title}</Link>
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph2)} />
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph3)} />
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph4)} />
          </div>
          <div className="col-sm-6 col-xs-12">
            <h2>{titles.title1}</h2>
            <p dangerouslySetInnerHTML={sanitizeUtil(paragraphs.paragraph5)} />
            <Form />
          </div>
        </div>
      </div>
    </div>) : null;
  }
}

Block2.propTypes = {
  data: React.PropTypes.object,
};
