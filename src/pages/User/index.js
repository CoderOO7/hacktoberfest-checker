import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SiteTitle from '../../components/SiteTitle';
import UsernameForm from '../../components/UsernameForm';
import PullRequests from './components/PullRequests';
import UserShare from './components/PullRequests/UserShare.js';

const User = ({
  match: {
    params: { username },
  },
}) => (
  <Fragment>
    <Helmet>
      <title>{username}</title>
    </Helmet>
    <SiteTitle />
    <UsernameForm username={username} />
    <PullRequests username={username} />
    <UserShare />
  </Fragment>
);

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
