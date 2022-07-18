import reactlogo from './logo.svg';
import logo from './favicon.png'
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import PriceCheckList from './components/PriceCheckList.component.js';
import AddPriceCheck from "./components/AddPriceCheck.component.js";

class App extends Component {
  render() {
    return(
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/pricecheck"} className="navbar-brand">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Link to={"/pricecheck"} className="navbar-brand">
            <h2>BTC Price Checker</h2>
          </Link>
          <div className="navbar-nav mr-auto">            
            <li>
              <Link to={"/add"} className="nav-link">
                <h4>Current Price</h4>
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          {/* Switch is not working properly
          <Switch>
            <Route exact path={["/", "/pricecheck"]} component={PriceCheckList} />
            <Route exact path="/add" component={AddPriceCheck} />
          </Switch> */}
        </div>
        <div className="App-footer">
        <img src={reactlogo} className="React-logo" alt="react" />
        <p>
          Built with React.js, Node.js, Express.js, & MySQL
        </p>
        <a
          className="React-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
      </div>
    );
  }
}

export default App;