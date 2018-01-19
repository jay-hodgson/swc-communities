// @flow
import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import * as WebConstants from './WebConstants.js';
import UserListComponent from './UserListComponent.js';
import logo from './logo.svg';
import './App.css';

type AppProps = {};
type AppState = { 
  usergroupheaders: array,
  error: string
};


class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {usergroupheaders: null, error: ""};
  }

  componentDidMount() {
    fetch(WebConstants.REPO_ENDPOINT + "userGroupHeaders?prefix=jay&limit=30&offset=0&typeFilter=USERS_ONLY")
      .then((response) => response.json())
      .then((responseJson) => { 
        this.setState({ usergroupheaders: responseJson.children })})
      .catch(error => {
        // On error, update state to capture the error for display
        this.setState({ error })
      });
  }

  render() {
    const { error, usergroupheaders } = this.state

    let content
    if (error) {
      // an error occurred fetching
      content = <p className="error">{error.message}</p>
    } else if (usergroupheaders) {
      // data is loaded, so display list
      content = <UserListComponent usergroupheaders={usergroupheaders} />
    } else {
      // no error and no users, still loading
      content = <p className="loading">Loading...</p>
    }

    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href={WebConstants.SYNAPSE_ORG} target="_blank">What is Synapse?</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Prototype Community Portal <img src={logo} className="App-logo" alt="logo" /></h1>
          </Grid>
        </Jumbotron>
        <Grid>
          <h4>Users</h4>
          <div>
            {content}
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
