import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Heading, Flex, Box, Button, Text, Spinner } from '@chakra-ui/react';

import { getAllProfiles } from '../../actions/devs';
import ProfileItem from './profileItem';

function devs(props) {
  const _isMounted = useRef(false);
  useEffect(() => {
    props.getAllProfiles();

    _isMounted.current = true;
  }, [_isMounted.current]);

  const handleProfile = () => {
    if (props.isAuthorized) return props.history.push('/profileform');

    return props.history.push('/login');
  };

  const renderProfiles = () => {
    return props.devs.map(profile => {
      return (
        <Flex direction="column" key={profile._id}>
          <ProfileItem profile={profile} />
        </Flex>
      );
    });
  };

  if (!props.devs) {
    if (props.error && props.error.noProfile) {
      return (
        <Box h="84.1vh">
          <Flex justify="center" align="center" h="100%" direction="column">
            <Heading fontWeight="500" fontSize="3rem" mb="1.5rem" color="#fff">
              No Profiles Made Yet
            </Heading>
            <Text fontWeight="400" fontSize="1.4rem" color="#fff">
              Want to make one ?
            </Text>
            <Button
              onClick={handleProfile}
              bg=" #16c79a"
              mt="1.5rem"
              _hover={{ background: '#13b38a' }}
              _focus={{ outline: 'none' }}>
              Create a Profile
            </Button>
          </Flex>
        </Box>
      );
    }

    return (
      <Box h="84.1vh">
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

  return (
    <Flex align="center" direction="column">
      <Heading
        textAlign="center"
        mb="1.5rem"
        mt="1rem"
        fontWeight="700"
        color="#e9f5f9">
        Developer Profiles
      </Heading>
      <Box>{renderProfiles()}</Box>
    </Flex>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth.isAuthorized,
    devs: state.devs.data,
    error: state.error.data,
  };
}

export default connect(mapStateToProps, { getAllProfiles })(devs);
