import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    // if (column.path == "title")
    //   return <Link to={"movies/" + item._id}>{_.get(item, column.path)}</Link>;
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._ + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td className="" key={this.createKey(item, column)}>
                <span className="column-name">{column.label}</span>
                <span className="column-info">
                  {this.renderCell(item, column)}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
