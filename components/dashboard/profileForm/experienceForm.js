import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Checkbox,
  Button,
  Text,
  Center,
} from '@chakra-ui/react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { postExperience } from '../../../actions/profile';
import { InputField } from '../../templates/inputField';
import { InputTextArea } from '../../templates/inputTextArea';

function experienceForm(props) {
  const [experience, setExperience] = useState({
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const onFormSubmit = async e => {
    e.preventDefault();

    const experienceCredentials = _.pick(experience, [
      'title',
      'company',
      'location',
      'from',
      'current',
      'description',
    ]);

    if (!experience.current) {
      experienceCredentials.to = experience.to;
    }

    props.postExperience(experienceCredentials, props.history);
  };

  const renderForm = () => {
    return (
      <Flex align="center" direction="column">
        <Box mt="1rem" mb="0.75rem">
          <Heading fontWeight="700">Experience Form</Heading>
        </Box>
        <Box w="90%">
          <form onSubmit={onFormSubmit}>
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Title"
              placeholder="Enter your title at company"
              isRequired={true}
              onChange={e =>
                setExperience({ ...experience, title: e.target.value })
              }
              value={experience.title}
              error={
                props.error && props.error.title ? props.error.title : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Company"
              placeholder="Enter company name"
              isRequired={true}
              onChange={e =>
                setExperience({ ...experience, company: e.target.value })
              }
              value={experience.company}
              error={
                props.error && props.error.company ? props.error.company : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Location"
              placeholder="Enter location of company"
              isRequired={false}
              onChange={e =>
                setExperience({ ...experience, location: e.target.value })
              }
              value={experience.location}
              error={
                props.error && props.error.location
                  ? props.error.location
                  : null
              }
            />
            <Flex>
              <InputField
                m="1rem"
                fontSize="1.2rem"
                mb="0.25rem"
                label="From"
                type="date"
                isRequired={true}
                onChange={e =>
                  setExperience({ ...experience, from: e.target.value })
                }
                value={String(experience.from)}
                error={
                  props.error && props.error.from ? props.error.from : null
                }
              />
              <InputField
                m="1rem"
                fontSize="1.2rem"
                mb="0.25rem"
                label="To"
                type="date"
                isDisabled={experience.current}
                isRequired={false}
                onChange={e =>
                  setExperience({ ...experience, to: e.target.value })
                }
                value={String(experience.to)}
                error={props.error && props.error.to ? props.error.to : null}
              />
            </Flex>
            <Checkbox
              mx="1rem"
              my="0.5rem"
              borderColor="#007a5b"
              onChange={e => {
                setExperience({
                  ...experience,
                  current: !experience.current,
                });
              }}
              defaultIsChecked={experience.current}
              value={experience.current}
              _focus={{ outline: 'none' }}>
              <Text fontSize="1.1rem" fontWeight="500" color="#007a5b">
                Currently doing your job.
              </Text>
            </Checkbox>

            <InputTextArea
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Description"
              placeholder="Tell us about your job"
              onChange={e =>
                setExperience({ ...experience, description: e.target.value })
              }
              value={experience.description}
              isRequired={false}
              error={
                props.error && props.error.description
                  ? props.error.description
                  : null
              }
            />

            <Button
              type="submit"
              w="60%"
              mx="auto"
              mb="2rem"
              display="block"
              bg="#16c79a"
              _hover={{ background: '#13b38a' }}
              _focus={{ outline: 'none' }}>
              Add Experience Info
            </Button>
          </form>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex justify="center">
      <Box w="80%" m="1rem">
        <RouterLink to="/dashboard">
          <Button
            bg=" #16c79a"
            _hover={{ background: '#13b38a' }}
            _focus={{ outline: 'none' }}>
            Back to DashBoard
          </Button>
        </RouterLink>
        <Center>
          <Box
            w="60%"
            border="solid 1px #eee"
            borderRadius="5px"
            bg="#e7fbff"
            my="1rem">
            {renderForm()}
          </Box>
        </Center>
      </Box>
    </Flex>
  );
}

function mapStateToProps(state) {
  return {
    error: state.error.data,
  };
}

export default connect(mapStateToProps, { postExperience })(experienceForm);
