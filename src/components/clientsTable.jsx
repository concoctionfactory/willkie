import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class ClientsTable extends Component {
  state = {};

  columns = [
    {
      path: "client",
      label: "Client",
      content: client => (
        <Link to={`/clients/${client.id}`}>{client.client}</Link>
      )
    },
    { path: "openInvoices", label: "Open Invoices" },
    { path: "billableHours", label: "Billable Hours" },
    { path: "totalCollected", label: "Total Collected" }
  ];

  render() {
    const { clients, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={clients}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ClientsTable;
