import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Box, Spinner, Heading, Flex, Button, Text } from '@chakra-ui/react';

import PostCreate from './postForms/createPost';
import PostLayout from './postForms/postLayout';
import { getPosts, deletePost, likePost, postPost } from '../../actions/post';

function posts(props) {
  const _isMounted = useRef(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.getPosts();
    _isMounted.current = true;
  }, [_isMounted.current]);

  const postDelete = postId => {
    props.deletePost(postId, props.history);
  };

  const renderPosts = () => {
    return props.posts.map(post => {
      return (
        <PostLayout
          post={post}
          bgText={'#f0faf7'}
          bg="#cfefe7"
          auth={props.auth && props.auth._id ? props.auth._id : null}
          key={post._id}
          likePost={props.likePost}
          deletePost={postDelete}
        />
      );
    });
  };

  const renderPostButton = () => {
    return (
      <Button
        p="0"
        h="50px"
        w="50px"
        borderRadius="50%"
        mb="2rem"
        mr="2rem"
        bg="#16c79a"
        _focus={{ outline: 'none' }}
        _hover={{ background: '#13b38a' }}
        onClick={() => setShow(!show)}>
        <i className="fas fa-plus"></i>
      </Button>
    );
  };

  const renderPostForm = () => {
    if (show) {
      return (
        <Box
          w="90%"
          p="1rem"
          m="1rem"
          bg="#bce9dd"
          borderRadius="10px"
          boxShadow="lg">
          <PostCreate
            auth={props.auth}
            post={props.postPost}
            error={props.error}
            placeholder="Message"
          />
        </Box>
      );
    }
    return null;
  };

  if (!props.posts) {
    if (props.error && props.error.noPost) {
      return (
        <Box h="84.1vh">
          <Flex
            justify="center"
            align="center"
            h="100%"
            direction="column"
            color="#fff">
            <Heading fontWeight="500" fontSize="3rem" mb="1.5rem">
              No Posts Yet
            </Heading>
            <Text fontWeight="400" fontSize="1.4rem">
              Be the first one to post
            </Text>
          </Flex>
          <Flex justify="center" align="center">
            <Box w="100%" position="fixed" bottom="0" textAlign="right">
              {renderPostButton()}
            </Box>
            <Box w="45%" position="fixed" bottom="0">
              {renderPostForm()}
            </Box>
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
      <Box w="45%">{renderPosts()}</Box>
      <Box w="100%" position="fixed" bottom="0" textAlign="right">
        {renderPostButton()}
      </Box>
      <Box w="45%" position="fixed" bottom="0">
        {renderPostForm()}
      </Box>
    </Flex>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.post.data,
    auth: state.auth.user,
    error: state.error.data,
  };
}

export default connect(mapStateToProps, {
  getPosts,
  postPost,
  deletePost,
  likePost,
})(posts);
