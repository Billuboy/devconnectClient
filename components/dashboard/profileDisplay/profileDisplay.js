import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  Center,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { deleteProfile } from '../../../actions/profile';
import Education from '../profileDisplay/educationDisplay';
import Experience from '../profileDisplay/experienceDisplay';

function profileDisplay(props) {
  const renderProfile = () => {
    return (
      <Flex direction="column" p="1rem">
        <Box mb="0.5rem">
          <Heading textAlign="center" mb="0.5rem" fontWeight="700">
            Dashboard
          </Heading>
          <Box fontWeight="600" fontSize="1.4rem">
            Welcome{' '}
            <Text display="inline" color="#54c3a7" fontWeight="800">
              {props.user}
            </Text>
          </Box>
        </Box>
        <Box>
          <Flex align="center" justify="flex-start">
            <RouterLink to="/profileform">
              <Button
                bg="#11698e"
                color="#f8f1f1"
                m="0.5rem"
                leftIcon={<i className="fas fa-pencil-alt" />}
                _hover={{ background: '#0d5471' }}
                _focus={{ outline: 'none' }}>
                Update Profile
              </Button>
            </RouterLink>
            <RouterLink to="/experience">
              <Button
                bg="#11698e"
                color="#f8f1f1"
                mr="0.5rem"
                leftIcon={<i className="fas fa-user-edit" />}
                _hover={{ background: '#0d5471' }}
                _focus={{ outline: 'none' }}>
                Experience
              </Button>
            </RouterLink>
            <RouterLink to="/education">
              <Button
                bg="#11698e"
                color="#f8f1f1"
                mr="0.5rem"
                leftIcon={<i className="fas fa-book-open" />}
                _hover={{ background: '#0d5471' }}
                _focus={{ outline: 'none' }}>
                Education
              </Button>
            </RouterLink>
          </Flex>
          <Center>
            <Divider orientation="horizontal" colorScheme="blue" />
          </Center>
        </Box>

        <Box>
          <Experience />
        </Box>
        <Box>
          <Education />
        </Box>

        <Button
          onClick={() => {
            props.history.push('/');
            props.deleteProfile();
          }}
          w="20%"
          bg="#e50052"
          color="#f8f1f1"
          mx="auto"
          mt="4rem"
          mb="0.5rem"
          _hover={{ background: '#cc0049' }}
          _focus={{ outline: 'none' }}>
          Delete My Account
        </Button>
      </Flex>
    );
  };

  return (
    <Flex justify="center">
      <Box
        w="70%"
        border="solid 1px #eee  "
        bg="#E7FBFF"
        borderRadius="5px"
        boxShadow="lg"
        my="1rem">
        {renderProfile()}
      </Box>
    </Flex>
  );
}

const mapStateToProps = state => {
  return { user: state.auth.user.name };
};

const router = withRouter(profileDisplay);

export default connect(mapStateToProps, { deleteProfile })(router);
