import React, { Component } from "react";
import Table from "./common/table";

class MattersTable extends Component {
  state = {};

  columns = [
    { path: "matter", label: "Matter" },
    { path: "closingDate", label: "Closing Date" },
    { path: "currentBudget", label: "Current Budget" },
    { path: "leadAttorney", label: "Lead Attorney" },
    { path: "clientAttorney", label: "Client Attorney" }
  ];

  render() {
    const { matters, sortColumn, onSort } = this.props;
    console.log(matters);

    return (
      <Table
        columns={this.columns}
        data={matters}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MattersTable;
