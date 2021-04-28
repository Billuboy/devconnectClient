import React from 'react';
import Moment from 'react-moment';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Flex, Button, Text, IconButton } from '@chakra-ui/react';

function postLayout(props) {
  const renderDelete = (userId, postId) => {
    if (userId === props.auth) {
      return (
        <IconButton
          variant="outline"
          color="red"
          bg="#ebf8f5"
          icon={<i className="fas fa-trash"></i>}
          _focus={{ outlne: 'none' }}
          onClick={() => props.deletePost(postId, props.history)}
        />
      );
    }
    return;
  };

  const renderLike = () => {
    if (props.likePost && props.auth) {
      return (
        <Button
          mr="0.75rem"
          bg="#ebf8f5"
          _focus={{ outline: 'none' }}
          leftIcon={
            <i
              className="fas fa-thumbs-up"
              style={{ color: `${props.like}` }}
            />
          }
          onClick={() => {
            props.likePost(props.post._id);
          }}>
          {props.post.likes.length}
        </Button>
      );
    }
    return;
  };

  const renderComment = () => {
    if (!props.noComments) {
      return (
        <RouterLink to={`/post/${props.post._id}`}>
          <Button
            bg="#e50052"
            color="#333"
            _focus={{ outline: 'none' }}
            _hover={{ background: '#cc0049' }}>
            Comments {props.post.comments ? props.post.comments.length : null}
          </Button>
        </RouterLink>
      );
    }
    return;
  };

  return (
    <Box
      w="90%"
      p="1rem"
      m="1rem"
      bg={props.bg}
      borderRadius="10px"
      _hover={{ boxShadow: '5px 5px 13px rgba(71,71,71,0.25)' }}
      boxShadow="lg">
      <Flex justify="space-between" mb="0.75rem">
        <Heading fontWeight="500" fontSize="1.3rem" color="#11a17c">
          {props.post.name}
        </Heading>
        <Box fontWeight="600" fontSize="1.1rem" color="#11698e">
          <Moment format="HH:MM DD-MM-YYYY">{props.post.date}</Moment>
        </Box>
      </Flex>
      <Flex justify="center" align="bottom">
        <Box
          w="100%"
          border="1px solid #eee"
          bg={props.bgText}
          borderRadius="10px">
          <Text p="0.5rem" fontWeight="500">
            {props.post.text}
          </Text>
        </Box>
      </Flex>
      <Flex justify="space-between" mt="0.75rem">
        <Box>
          <Flex justify="flex-end">
            {renderLike()}
            {renderComment()}
          </Flex>
        </Box>
        <Box>{renderDelete(props.post.user, props.post._id)}</Box>
      </Flex>
      <Box>{props.children}</Box>
    </Box>
  );
}

export default postLayout;
