import React, { Component } from "react";
import { getClients } from "../services/clientService";
import ClientsTable from "./clientsTable";
import _ from "lodash";

class Clients extends Component {
  state = {
    clients: [],
    sortColumn: { path: "client", order: "asc" }
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const { clients, sortColumn } = this.state;
    const sorted = _.orderBy(clients, [sortColumn.path], [sortColumn.order]);
    return { data: sorted };
  };

  componentDidMount() {
    const clients = getClients();
    this.setState({ clients });
  }

  render() {
    const { sortColumn } = this.state;
    const { data: clients } = this.getPageData();
    return (
      <React.Fragment>
        <h2 className=" px-3 py-3 pt-md-5 pb-md-4 text-center display-4">
          Clients
        </h2>

        <ClientsTable
          clients={clients}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
      </React.Fragment>
    );
  }
}

export default Clients;
