import React from 'react';
import ReactDOM from 'react-dom';
import * as WebConstants from '../../shared/WebConstants.js';
var UserListComponent = function UserListComponent(props) {
  var userBadges = renderUserBadges(props.usergroupheaders);
  return React.createElement(
    'section',
    null,
    userBadges
  );
};

var renderUserBadges = function renderUserBadges(usergroupheaders) {
  return usergroupheaders.map(function (usergroupheader) {
    return renderUserGroupHeader(usergroupheader);
  });
};

var renderUserGroupHeader = function renderUserGroupHeader(usergroupheader) {
  return React.createElement(
    'div',
    { key: usergroupheader.ownerId },
    React.createElement(
      'a',
      { href: WebConstants.SYNAPSE_ORG + WebConstants.PROFILE_PAGE + usergroupheader.ownerId, target: '_blank' },
      usergroupheader.firstName + " " + usergroupheader.lastName + " (" + usergroupheader.userName + ")"
    )
  );
};

// export library components
export default UserListComponent;