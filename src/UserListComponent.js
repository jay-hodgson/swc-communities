// @flow
import React, { Component } from 'react';
import * as WebConstants from './WebConstants.js';

const UserListComponent = (props: {usergroupheaders: array}) => {
  const userBadges = renderUserBadges(props.usergroupheaders);
  return (
    <section>
        { userBadges }
    </section>
  );
};

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

export default UserListComponent;