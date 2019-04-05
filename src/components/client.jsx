import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getClient } from "../services/clientService";
import {
  XYPlot,
  LineSeries,
  RadialChart,
  DiscreteColorLegend
} from "react-vis";
// import DiscreteColorLegend from "legends/discrete-color-legend";

class Client extends Component {
  state = { client: {} };

  async getData() {
    const clientId = this.props.match.params.id;
    let client = await getClient(+clientId);
    client = client[0];
    client.openInvoicesNum = this.toNumber(client.openInvoices);
    client.totalCollectedNum = this.toNumber(client.totalCollected);
    client.unbilledInventoryNum = this.toNumber(client.unbilledInventory);
    client.unpaidInventorydNum = this.toNumber(client.unpaidInventory);
    this.setState({ client });
    console.log(this.state, client, clientId);
  }

  async componentDidMount() {
    await this.getData();
  }

  toNumber(string) {
    console.log(string);
    return +string.trim().replace(/[$*,]/g, "");
  }

  render() {
    const { client } = this.state;
    const graph1 = [
      {
        angle: client.openInvoicesNum,
        title: `Open Invoices ${client.openInvoices}`,
        color: "#a3b5a0"
      },
      {
        angle: client.totalCollectedNum,
        title: `Total Collected ${client.totalCollected}`,
        color: "#3e2268"
      }
    ];
    const graph2 = [
      {
        angle: client.unbilledInventoryNum,
        title: `Unbilled Inventory ${client.unbilledInventory}`,
        color: "#a3b5a0"
      },
      {
        angle: client.unpaidInventorydNum,
        title: `Unpaid Inventory ${client.unpaidInventory}`,
        color: "#3e2268"
      }
    ];

    return (
      <div className="mb-5">
        <div className="px-3 py-3 pt-md-5 pb-md-4 text-center ">
          <h2 className=" display-4">{client.client}</h2>
          <p className="lead">Billable Hours: {client.billableHours}</p>
        </div>
        <section
          className="d-flex flex-column flex-md-row align-items-center pt-md-3
         pb-md-3 justify-content-center"
        >
          <RadialChart
            innerRadius={100}
            radius={140}
            data={graph1}
            width={300}
            height={300}
            padAngle={0.02}
            colorType={"literal"}
            colorDomain={[0, 100]}
            colorRange={[0, 10]}
          />
          <DiscreteColorLegend height={100} width={300} items={graph1} />
        </section>
        <section className="d-flex flex-column flex-md-row align-items-center justify-content-center pb-md-5 ">
          <RadialChart
            innerRadius={100}
            radius={140}
            data={graph2}
            width={300}
            height={300}
            padAngle={0.02}
            colorType={"literal"}
            colorDomain={[0, 100]}
            colorRange={[0, 10]}
          />
          <DiscreteColorLegend height={100} width={300} items={graph2} />
        </section>
        <section className="d-flex align-items-center justify-content-center">
          <Link className="btn btn-primary btn-back mt-4" to="/clients">
            back
          </Link>
        </section>
      </div>
    );
  }
}

export default Client;
