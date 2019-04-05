import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Clients from "./components/clients";
import Matters from "./components/matters";
import NavBar from "./components/navBar";
import Client from "./components/client";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <main className="container-fluid">
          <Switch>
            <Route path="/clients/:id" component={Client} />

            <Route path="/clients" component={Clients} />

            <Route path="/matters" component={Matters} />
            <Redirect from="/" exact to="/clients" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
