import React, { useState } from 'react';
import { IconButton, Box, Flex, createStandaloneToast } from '@chakra-ui/react';

import { InputTextArea } from '../../templates/inputTextArea';

function createPost(props) {
  const [text, setText] = useState('');

  const loginPopup = () => {
    const toast = createStandaloneToast();
    const id = 'remove-duplication';

    if (toast.isActive(id)) return null;

    return toast({
      id,
      title: 'Unauthorized Access',
      description: 'Please Login First',
      position: 'top',
      status: 'error',
      duration: 3500,
      isClosable: true,
    });
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    const postData = {
      text,
    };
    props.post(postData);
    props.auth._id || props.auth.keys.length === 0 ? null : loginPopup();
    setText('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Flex justify="space-evenly" mt={props.mt}>
        <InputTextArea
          placeholder={props.placeholder}
          onChange={e => setText(e.target.value)}
          value={text}
          w="85%"
          error={props.error && props.error.text ? props.error.text : null}
        />
        <Box w="10%" position="relative">
          <IconButton
            position="absolute"
            bottom="2"
            variant="outline"
            color="#16c79a"
            w="39px"
            h="39px"
            border="1px solid #333 "
            icon={<i className="fas fa-chevron-right"></i>}
            type="Submit"
            borderColor="#00a37a"
            _hover={{ borderColor: '#00a37a' }}
            _focus={{ outline: 'none' }}
          />
        </Box>
      </Flex>
    </form>
  );
}

export default createPost;
