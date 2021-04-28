import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { logoutAction } from '../actions/auth';

function Header(props) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.jwtToken) {
        const tokenInfo = jwt_decode(localStorage.jwtToken);
        const currentTime = Date.now() / 1000;

        if (tokenInfo.exp < currentTime) {
          props.logoutAction();
        }
      }
    }
  });

  const authLinks = () => {
    return (
      <>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </>
    );
  };

  const userLinks = () => {
    return (
      <>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <Link
          onClick={() => {
            props.logoutAction();
            props.history.push('/login');
          }}>
          Logout
        </Link>
      </>
    );
  };

  const renderHeader = () => {
    return (
      <Flex justifyContent="space-between">
        <Box>
          <RouterLink to="/">
            <Box
              fontSize="1.5rem"
              fontWeight="800"
              color="#4087a4"
              display="inline">
              <Text display="inline" color="#76c2c0">
                Dev
              </Text>
              Connect
            </Box>
          </RouterLink>
        </Box>
        <Box className="router" color="#eee">
          <RouterLink to="/devs">Developers</RouterLink>
          {props.auth ? userLinks() : authLinks()}
        </Box>
      </Flex>
    );
  };

  return (
    <Flex alignItems="center">
      <Box w="100%" p="1rem">
        {renderHeader()}
      </Box>
    </Flex>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthorized,
});

export default connect(mapStateToProps, { logoutAction })(withRouter(Header));
