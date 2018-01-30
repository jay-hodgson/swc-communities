'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _WebConstants = require('../../shared/WebConstants.js');

var WebConstants = _interopRequireWildcard(_WebConstants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserListComponent = function UserListComponent(props) {
  var userBadges = renderUserBadges(props.usergroupheaders);
  return _react2.default.createElement(
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
  return _react2.default.createElement(
    'div',
    { key: usergroupheader.ownerId },
    _react2.default.createElement(
      'a',
      { href: WebConstants.SYNAPSE_ORG + WebConstants.PROFILE_PAGE + usergroupheader.ownerId, target: '_blank' },
      usergroupheader.firstName + " " + usergroupheader.lastName + " (" + usergroupheader.userName + ")"
    )
  );
};

// export library components
exports.default = UserListComponent;
module.exports = exports['default'];