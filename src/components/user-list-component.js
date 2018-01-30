import React from 'react';
import ReactDOM from 'react-dom';
import * as WebConstants from './web-constants.js';

export class UserListComponent extends React.Component {
  render() {
    const renderUserBadges = usergroupheaders => (
      usergroupheaders.map(usergroupheader => renderUserGroupHeader(usergroupheader))
    );
    
    const renderUserGroupHeader = usergroupheader => (
      <div key={usergroupheader.ownerId}>
        <a href={WebConstants.SYNAPSE_ORG+WebConstants.PROFILE_PAGE+usergroupheader.ownerId} target="_blank">
          {usergroupheader.firstName + " " + usergroupheader.lastName + " (" + usergroupheader.userName + ")"}
        </a>
      </div>
    );

    const userBadges = renderUserBadges(this.props.usergroupheaders);
    return (
      <section>
          { userBadges }
      </section>
    );
  }
}
