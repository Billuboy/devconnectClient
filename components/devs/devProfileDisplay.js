import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  Center,
  Grid,
  Link,
} from '@chakra-ui/react';

function devProfile(props) {
  const renderTwitter = () => {
    return (
      <Box p="0.6rem">
        <a
          href={`https://www.twitter.com/${props.profile.social.twitter}`}
          target="blank">
          <i
            className="fab fa-twitter"
            style={{ color: '#1da1f2', fontSize: '1.5rem' }}></i>
        </a>
      </Box>
    );
  };

  const renderFacebook = () => {
    return (
      <Box p="0.6rem">
        <a
          href={`https://www.facebook.com/${props.profile.social.facebook}`}
          target="blank">
          <i
            className="fab fa-facebook"
            style={{ color: '#4267b2', fontSize: '1.5rem' }}></i>
        </a>
      </Box>
    );
  };

  const renderLinkedin = () => {
    return (
      <Box p="0.6rem">
        <a
          href={`https://www.linkedin.com/${props.profile.social.linkedin}`}
          target="blank">
          <i
            className="fab fa-linkedin"
            style={{ color: '#006192', fontSize: '1.5rem' }}></i>
        </a>
      </Box>
    );
  };

  const renderYoutube = () => {
    return (
      <Box p="0.6rem">
        '
        <a
          href={`https://www.youtube.com/${props.profile.social.youtube}`}
          target="blank">
          <i
            className="fab fa-youtube"
            style={{ color: '#ff0000', fontSize: '1.5rem' }}></i>
        </a>
      </Box>
    );
  };

  const renderInstagram = () => {
    return (
      <Box p="0.6rem">
        <a
          href={`https://www.instagram.com/${props.profile.social.instagram}`}
          target="blank">
          <i
            className="fab fa-instagram"
            style={{ color: '#833ab4', fontSize: '1.5rem' }}></i>
        </a>
      </Box>
    );
  };

  const renderGitHub = () => {
    return (
      <Box p="0.6rem">
        <a
          href={`https://www.github.com/${props.profile.githubusername}`}
          target="blank">
          <i
            className="fab fa-github"
            style={{ color: '#171515', fontSize: '1.5rem' }}></i>
        </a>
      </Box>
    );
  };

  return (
    <Flex align="center" direction=" column">
      <Box w="60%">
        <Box
          textAlign="center"
          bg="#def6ef"
          border="1px solid"
          borderRadius="5px"
          m="1rem">
          <Heading my="0.5rem" fontWeight="700" fontSize="2rem" color="#11698e">
            {props.profile.user.name}
          </Heading>
          <Text fontSize="1.2rem" fontWeight="600">
            {props.profile.status}
          </Text>
          <Text fontSize="1.2rem" p="0.5rem" fontWeight="600">
            {props.profile.location}
          </Text>
          <Flex justify="space-evenly" my="0.75rem">
            <Box>
              <Heading
                fontSize="1.2rem"
                fontWeight="600"
                display="inline"
                color="#11698e">
                Company:{' '}
              </Heading>
              <Text display="inline" fontWeight="600">
                {props.profile.company}
              </Text>
            </Box>
            <Box>
              <Heading
                fontSize="1.2rem"
                fontWeight="600"
                display="inline"
                color="#11698e">
                Website:{' '}
              </Heading>
              <Link
                display="inline"
                fontWeight="600"
                href={`${props.profile.website}`}
                target="blank"
                _focus={{ outline: 'none' }}>
                {props.profile.website}
              </Link>
            </Box>
          </Flex>
          <Flex justify="space-evenly" mb="0.5rem" mt="1rem">
            {props.profile.social.twitter ? renderTwitter() : null}
            {props.profile.social.facebook ? renderFacebook() : null}
            {props.profile.social.youtube ? renderYoutube() : null}
            {props.profile.social.linkedin ? renderLinkedin() : null}
            {props.profile.social.instagram ? renderInstagram() : null}
            {props.profile.githubusername ? renderGitHub() : null}
          </Flex>
        </Box>
        <Box
          textAlign="center"
          border="1px solid"
          borderRadius="5px"
          bg="#e9f5f9"
          m="1rem"
          p="1rem">
          <Heading fontWeight="600" fontSize="2rem" mb="0.5rem" color="#11698e">
            Bio
          </Heading>
          <Text fontWeight="600">{props.profile.bio}</Text>
          <Center>
            <Divider orientation="horizontal" m="1rem" />
          </Center>
          <Heading fontWeight="600" fontSize="2rem" mb="1rem" color="#11698e">
            Skills
          </Heading>
          <Center>
            <Grid
              templateColumns="repeat(3, 0fr)"
              columnGap="6rem"
              rowGap="1rem">
              {props.renderSkills()}
            </Grid>
          </Center>
        </Box>
        <Flex>
          <Box
            textAlign="center"
            border="1px solid"
            borderRadius="5px"
            bg="#e9f5f9"
            m="1rem"
            w="48%">
            <Heading
              fontWeight="600"
              fontSize="2rem"
              my="0.5rem"
              color="#11698e">
              Experience
            </Heading>
            <Box>{props.renderExperience()}</Box>
          </Box>

          <Box
            textAlign="center"
            border="1px solid"
            borderRadius="5px"
            bg="#e9f5f9"
            m="1rem"
            w="48%">
            <Heading
              fontWeight="600"
              fontSize="2rem"
              my="0.5rem"
              color="#11698e">
              Education
            </Heading>
            <Box>{props.renderEducation()}</Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default devProfile;
