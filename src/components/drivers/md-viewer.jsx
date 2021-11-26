// Copyright (c) 2017 PlanGrid, Inc.

import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { marked } from 'marked'; // eslint-disable-line no-unused-vars
import parse from 'html-react-parser'; // eslint-disable-line no-unused-vars

class MdViewer extends Component {

  static parse(data) {
    // console.log('John > MdViewer');
    // console.log(data);
    // var rawMarkup = marked("This is _Markdown_.", { sanitize: true });
    const rawMarkup = marked(data, { sanitize: true });
    // return { __html: rawMarkup };
    return rawMarkup;
  }

  constructor(props) {
    super(props);
    this.state = MdViewer.parse(props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(MdViewer.parse(nextProps.data));
  }

  render() {
    console.log('john kkk');
    console.log(this.state);
    return parse(this.state);
    // return <div>Hello World</div>;
  }
}

export default MdViewer;
