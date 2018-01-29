// @flow
import React, { Component } from 'react';
import * as WebConstants from './WebConstants.js';
import UserListComponent from './UserListComponent.js';
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
        <a href={WebConstants.SYNAPSE_ORG} target="_blank">What is Synapse?</a>
        <h4>Users</h4>
        <div>
          {content}
        </div>
      </div>
    );
  }
}

export default App;