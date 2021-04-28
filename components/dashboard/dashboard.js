import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Spinner, Flex, Box } from '@chakra-ui/react';

import { getProfile } from '../../actions/profile';
import ProfileDisplay from './profileDisplay/profileDisplay';

function dashboard(props) {
  const _isMounted = useRef(false);

  useEffect(() => {
    props.getProfile();

    _isMounted.current = true;
  }, [_isMounted.current]);

  const renderProfile = () => {
    return <ProfileDisplay />;
  };

  if (!props.profile.data) {
    if (props.error && props.error.newProfile) {
      return <Redirect to="/profileform" />;
    }
    return (
      <Box h="86.4vh">
        <Flex justify="center" align="center" h="100%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="#f8f1f1"
            color="#19456b"
            size="xl"
          />
        </Flex>
      </Box>
    );
  }

  return renderProfile();
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    error: state.error.data,
  };
}

export default connect(mapStateToProps, { getProfile })(dashboard);
