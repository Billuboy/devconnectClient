import React from 'react';
import {
  Heading,
  Flex,
  Box,
  Button,
  Text,
  List,
  ListItem,
  Center,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function ProfileItem({ profile }) {
  const renderSkills = () => {
    let a = 0;
    return profile.skills.map(skill => {
      a = a + 1;
      if (a > 3) return;
      if (skill.length === 1 || skill.length === 0) {
        a = a - 1;
        return null;
      }
      return (
        <ListItem key={a} borderBottom="1px solid #ddd" p="0.6rem">
          <Flex justify="space-between">
            <Box mr="1.5rem">
              <i className="fas fa-check" />
            </Box>
            <Text display="inline" fontWeight="500">
              {skill}
            </Text>
          </Flex>
        </ListItem>
      );
    });
  };

  return (
    <Box
      textAlign="center"
      bg="#e3f7f2"
      p="1rem"
      m="1.5rem"
      borderRadius="10px"
      boxShadow="lg"
      w="550px"
      h="253px"
      position="relative">
      <Flex justify="space-around">
        <Box textAlign="left">
          <Heading mb="0.5rem" fontWeight="600" fontSize="1.95rem">
            {profile.user.name}
          </Heading>
          <Text fontSize="1.3rem" mb="0.5rem" fontWeight="600">
            @{profile.handle}
          </Text>
          <Text fontSize="1.1rem" fontWeight="500">
            {profile.status}
          </Text>
        </Box>
        <Box>
          <Text fontWeight="600" fontSize="1.2rem" mb="0.4rem">
            Skills
          </Text>
          <Box>
            <List border="1px solid #ddd" borderRadius="5px" bg="#eefaf7">
              {renderSkills()}
            </List>
          </Box>
        </Box>
      </Flex>
      <RouterLink to={`/devs/${profile.handle}`}>
        <Center>
          <Button
            position="absolute"
            bottom="0"
            bg="#16c79a"
            mb="1rem"
            _hover={{ background: '#13b38a' }}
            _focus={{ outline: 'none' }}>
            View Profile
          </Button>
        </Center>
      </RouterLink>
    </Box>
  );
}

export default ProfileItem;
