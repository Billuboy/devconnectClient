import React, { useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Spinner,
  Divider,
  Center,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { getProfileByHandle } from '../../actions/devs';
import Dev from './devProfileDisplay';

function devDisplay(props) {
  const _isMounted = useRef(false);

  useEffect(async () => {
    props.getProfileByHandle(props.match.params.handle);

    _isMounted.current = true;
  }, [_isMounted.current]);

  const renderSkills = () => {
    let a = 0;
    return props.profile.skills.map(skill => {
      a = a + 1;
      if (skill.length === 1 || skill.length === 0) return null;
      return (
        <Box key={a}>
          <Flex justify="space-around">
            <Box mr="0.5rem">
              <i className="fas fa-check" />
            </Box>
            <Text fontWeight="600">{skill}</Text>
          </Flex>
        </Box>
      );
    });
  };

  const renderExperience = () => {
    return props.profile.experience.map(exp => {
      return (
        <Box key={exp._id} textAlign="left" p="1rem">
          <Text fontSize="1.2rem" fontWeight="600" color="#11698e">
            {exp.company}
          </Text>
          <Text fontWeight="500">
            <Moment format="DD-MM-YYYY">{exp.from}</Moment> -{' '}
            {exp.current === true ? (
              'Now'
            ) : (
              <Moment format="DD-MM-YYYY">{exp.to}</Moment>
            )}
          </Text>
          <Box mt="0.5rem">
            <Heading
              fontSize="1rem"
              fontWeight="600"
              display="inline"
              color="#11698e">
              Position: {''}
            </Heading>
            <Text display="inline" fontWeight="500">
              {exp.title}
            </Text>
          </Box>
          <Box>
            <Heading
              fontSize="1rem"
              fontWeight="600"
              display="inline"
              color="#11698e">
              Location: {''}
            </Heading>
            <Text display="inline" fontWeight="500">
              {exp.location}
            </Text>
          </Box>
          <Box>
            {exp.description.length > 1 ? (
              <>
                <Heading
                  fontSize="1rem"
                  fontWeight="600"
                  display="inline"
                  color="#11698e">
                  Description: {''}
                </Heading>
                <Text display="inline" fontWeight="500">
                  {exp.description}
                </Text>
              </>
            ) : null}
          </Box>
          <Center>
            <Divider orientation="horizontal" />
          </Center>
        </Box>
      );
    });
  };

  const renderEducation = () => {
    return props.profile.education.map(edu => {
      return (
        <Box key={edu._id} textAlign="left" p="1rem">
          <Text fontSize="1.2rem" fontWeight="600" color="#11698e">
            {edu.school}
          </Text>
          <Text fontWeight="500">
            <Moment format="DD-MM-YYYY">{edu.from}</Moment> -{' '}
            {edu.current === true ? (
              'Now'
            ) : (
              <Moment format="DD-MM-YYYY">{edu.to}</Moment>
            )}
          </Text>
          <Box mt="0.5rem">
            <Heading
              fontSize="1rem"
              fontWeight="600"
              display="inline"
              color="#11698e">
              Degree: {''}
            </Heading>
            <Text display="inline" fontWeight="500">
              {edu.degree}
            </Text>
          </Box>
          <Box>
            <Heading
              fontSize="1rem"
              fontWeight="600"
              display="inline"
              color="#11698e">
              Field Of Study: {''}
            </Heading>
            <Text display="inline" fontWeight="500">
              {edu.fieldofstudy}
            </Text>
          </Box>
          <Box>
            {edu.description.length > 1 ? (
              <>
                <Heading
                  fontSize="1rem"
                  fontWeight="600"
                  display="inline"
                  color="#11698e">
                  Description: {''}
                </Heading>
                <Text display="inline" fontWeight="500">
                  {edu.description}
                </Text>
              </>
            ) : null}
          </Box>
          <Center>
            <Divider orientation="horizontal" />
          </Center>
        </Box>
      );
    });
  };

  const renderProfile = () => {
    return (
      <Dev
        profile={props.profile}
        renderEducation={renderEducation}
        renderSkills={renderSkills}
        renderExperience={renderExperience}
      />
    );
  };

  if (!props.profile) {
    if (props.error && props.error.noProfile) {
      return (
        <Box h="84.1vh">
          <Flex align="center" justify="center" h="100%" direction="column">
            <Heading fontSize="4rem" mb="2rem" color="#fff">
              404
            </Heading>
            <Text fontSize="2.5rem" color="#fff">
              Dev Not Found
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
        <RouterLink to="/devs">
          <Button
            bg=" #16c79a"
            _hover={{ background: '#13b38a' }}
            _focus={{ outline: 'none' }}>
            Back to Profiles
          </Button>
        </RouterLink>
        <Box>{renderProfile()}</Box>
      </Box>
    </Flex>
  );
}

function mapStateToProps(state) {
  return {
    profile: state.devs.profile,
    error: state.error.data,
  };
}

export default connect(mapStateToProps, { getProfileByHandle })(devDisplay);
