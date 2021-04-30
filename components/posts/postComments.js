import React, { useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  Spinner,
  Button,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import {
  getPost,
  likeSinglePost,
  deleteSinglePost,
  postComment,
  deleteComment,
} from '../../actions/post';
import PostCreate from './postForms/createPost';
import PostLayout from './postForms/postLayout';

function postComments(props) {
  const _isMounted = useRef(false);

  useEffect(async () => {
    await props.getPost(props.match.params.id);

    _isMounted.current = true;
  }, [_isMounted.current]);

  const commentPost = data => {
    props.postComment(props.match.params.id, data);
  };

  const commentDelete = commentId => {
    props.deleteComment(props.match.params.id, commentId, props.history);
  };

  const renderComments = () => {
    return props.post.comments.map(comment => {
      return (
        <PostLayout
          post={comment}
          bg={'#e9fbff'}
          bgText={'#f3fdff'}
          key={comment._id}
          noComments={true}
          auth={props.auth && props.auth._id ? props.auth._id : null}
          deletePost={commentDelete}
        />
      );
    });
  };

  const renderPost = () => {
    return (
      <>
        <PostLayout
          bg={'#cfefe7'}
          bgText={'#f0faf7'}
          post={props.post}
          auth={props.auth && props.auth._id ? props.auth._id : null}
          likePost={props.likeSinglePost}
          deletePost={props.deleteSinglePost}
          history={props.history}>
          <PostCreate
            mt="2rem"
            auth={props.auth ? props.auth : null}
            post={commentPost}
            error={props.error}
            placeholder="Comment"
          />
        </PostLayout>
        <Box>{renderComments()}</Box>
      </>
    );
  };

  if (!props.post) {
    if (props.error && props.error.post) {
      return (
        <Box h="84.1vh">
          <Flex align="center" justify="center" h="100%" direction="column">
            <Heading fontSize="4rem" mb="2rem" color="#fff">
              404
            </Heading>
            <Text fontSize="2.5rem" color="#fff">
              Post Not Found
            </Text>
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
    <Flex justify="center">
      <Box w="80%" m="1rem">
        <RouterLink to="/">
          <Button
            bg=" #16c79a"
            _hover={{ background: '#13b38a' }}
            _focus={{ outline: 'none' }}>
            Back to Posts
          </Button>
        </RouterLink>
        <Center>
          <Box w="60%">{renderPost()}</Box>
        </Center>
      </Box>
    </Flex>
  );
}

function mapStateToProps(state) {
  return {
    post: state.post.singlePost,
    auth: state.auth.user,
    error: state.error.data,
  };
}

export default connect(mapStateToProps, {
  getPost,
  deleteSinglePost,
  likeSinglePost,
  postComment,
  deleteComment,
})(postComments);
