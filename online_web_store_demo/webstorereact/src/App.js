import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import { Switch, Route, Redirect, Link} from 'react-router-dom';

import Shopping from "./Containers/Shopping";
import Cart from "./Containers/Cart";
import Success from "./Components/Success";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Ringo Web Store
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to="/Shopping">Store</Link>
            </NavItem>
            <NavItem>
              <Link to="/Cart">Cart</Link>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/Shopping" component={Shopping} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Success" component={Success} />
          <Redirect to="/Shopping" />
        </Switch>
      </div>
    );
  }
}

export default App;
