// Copyright (c) 2017 PlanGrid, Inc.

import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { marked } from 'marked';
import parse from 'html-react-parser';

class MdViewer extends Component {

  static parse(data) {
    return marked(data, { sanitize: true });
  }

  constructor(props) {
    super(props);
    this.state = MdViewer.parse(props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(MdViewer.parse(nextProps.data));
  }

  render() {
    return parse(this.state);
  }
}

export default MdViewer;
