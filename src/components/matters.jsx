import React, { Component } from "react";
import { getMatters } from "../services/matterService";
import MattersTable from "./mattersTable";
import _ from "lodash";

class Matters extends Component {
  state = {
    matters: [],
    sortColumn: { path: "matter", order: "asc" }
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const { matters, sortColumn } = this.state;
    const sorted = _.orderBy(matters, [sortColumn.path], [sortColumn.order]);
    return { data: sorted };
  };

  componentDidMount() {
    const matters = getMatters();
    this.setState({ matters });
  }
  render() {
    const { sortColumn } = this.state;
    const { data: matters } = this.getPageData();
    return (
      <React.Fragment>
        <h2 className=" px-3 py-3 pt-md-5 pb-md-4 text-center display-4">
          Matters
        </h2>
        <MattersTable
          matters={matters}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
      </React.Fragment>
    );
  }
}

export default Matters;
