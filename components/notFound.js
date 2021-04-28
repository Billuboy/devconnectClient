import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

function notFound() {
  return (
    <Box h="84.1vh">
      <Flex align="center" justify="center" h="100%" direction="column">
        <Heading fontSize="4rem" mb="2rem" color="#fff">
          404
        </Heading>
        <Text fontSize="2.5rem" color="#fff">
          Page Not Found
        </Text>
      </Flex>
    </Box>
  );
}

export default notFound;
