// @flow
import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import * as WebConstants from './WebConstants.js';
import logo from './logo.svg';
import './App.css';

type Props = {};
type State = {};

const UserListComponent = props => {
  const userBadges = renderUserBadges(props.children);

  return (
    <section>
      <div><h1>Users</h1></div>
      <div>
        { userBadges }
      </div>
    </section>
  );
};


const renderUserBadges = children => (
  children.map(usergroupheader => this.renderUserGroupHeader(usergroupheader))
);

const renderUserGroupHeader = usergroupheader => (
  <div>
    <a href={WebConstants.SYNAPSE_ORG}{WebConstants.PROFILE_PAGE}{usergroupheader.ownerId}>
      {usergroupheader.firstName} {" "} {usergroupheader.lastName} {" ("} {usergroupheader.userName} {")"}
    </a>
  </div>
);

class App extends Component<Props, State> {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="//www.synapse.org" target="_blank">What is Synapse?</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Prototype Community Portal <img src={logo} className="App-logo" alt="logo" /></h1>
            userGroupHeaders?prefix=jay&limit=30&offset=0&typeFilter=USERS_ONLY
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
