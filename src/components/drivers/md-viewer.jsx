// Copyright (c) 2017 PlanGrid, Inc.

import React, { Component } from 'react';

import ReactDataGrid from 'react-data-grid';
// import CSV from 'comma-separated-values';

class MdViewer extends Component {

  static parse(data) {

    console.log(`John > MdViewer`);
    console.log(data);
    // const rows = [];
    // const columns = [];

    // new CSV(data).forEach((array) => {
    //   if (columns.length < 1) {
    //     array.forEach((cell, idx) => {
    //       columns.push({
    //         key: `key-${idx}`,
    //         name: cell,
    //         resizable: true,
    //         sortable: true,
    //         filterable: true,
    //       });
    //     });
    //   } else {
    //     const row = {};
    //     array.forEach((cell, idx) => {
    //       row[`key-${idx}`] = cell;
    //     });
    //     rows.push(row);
    //   }
    // });

    // return { rows, columns };
  }

  constructor(props) {
    super(props);
    this.state = MdViewer.parse(props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(MdViewer.parse(nextProps.data));
  }

  render() {
    return <div>Hello John on MD files</div>;
    // const { rows, columns } = this.state;
    // return (
    //   <ReactDataGrid
    //     columns={columns}
    //     rowsCount={rows.length}
    //     rowGetter={i => rows[i]}
    //     minHeight={this.props.height || 650}
    //   />
    // );
  }
}

export default CsvViewer;
