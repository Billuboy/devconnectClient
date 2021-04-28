import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import { connect } from 'react-redux';

import { InputField } from '../templates/inputField';
import { PasswordField } from '../templates/passwordField';
import { loginAction } from '../../actions/auth';

function login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.auth) {
      props.history.push('/dashboard');
    }
  });

  const onFormSubmit = async e => {
    e.preventDefault();
    const credentials = { email, password };

    props.loginAction(credentials, props.history);
  };

  const renderForm = () => {
    return (
      <Flex align="center" direction="column" bg="#e7fbff">
        <Box mt="1.5rem" textAlign="center">
          <Heading size="xl">Login to Your Account</Heading>
        </Box>
        <Box w="90%">
          <form onSubmit={onFormSubmit}>
            <InputField
              label="Email"
              m="1.5rem"
              mb="0.75rem"
              fontSize="1.3rem"
              placeholder="Enter Registered Email"
              type="email"
              isRequired={true}
              onChange={e => setEmail(e.target.value)}
              value={email}
              error={
                props.error && props.error.email ? props.error.email : null
              }
            />
            <PasswordField
              label="Password"
              show={show}
              isRequired={true}
              value={password}
              onChange={e => setPassword(e.target.value)}
              onClick={e => setShow(!show)}
              error={
                props.error && props.error.password
                  ? props.error.password
                  : null
              }
            />
            <Button
              type="submit"
              bg="#16c79a"
              display="block"
              mx="auto"
              w="80%"
              my="2rem"
              _focus={{ outline: 'none' }}
              _hover={{ background: '#13b38a' }}>
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    );
  };

  return (
    <Box h="84.1vh">
      <Flex h="100%" justify="center" align="center">
        <Box w="30%" border="solid 1px #eee" borderRadius="5px">
          {renderForm()}
        </Box>
      </Flex>
    </Box>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthorized,
  error: state.error.data,
});

export default connect(mapStateToProps, { loginAction })(login);
