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

import { InputField } from '../../templates/inputField';
import { InputTextArea } from '../../templates/inputTextArea';
import { postEducation } from '../../../actions/profile';

function educationForm(props) {
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const onFormSubmit = async e => {
    e.preventDefault();

    const educationCredentials = _.pick(education, [
      'school',
      'degree',
      'fieldofstudy',
      'from',
      'current',
      'description',
    ]);

    if (!education.current) {
      educationCredentials.to = education.to;
    }
    props.postEducation(educationCredentials, props.history);
  };

  const renderForm = () => {
    return (
      <Flex align="center" direction="column">
        <Box mt="1rem" mb="0.75rem">
          <Heading fontWeight="700">Education Form</Heading>
        </Box>
        <Box w="90%">
          <form onSubmit={onFormSubmit}>
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="School"
              placeholder="Enter school name"
              isRequired={true}
              onChange={e =>
                setEducation({ ...education, school: e.target.value })
              }
              value={education.school}
              error={
                props.error && props.error.school ? props.error.school : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Degree"
              placeholder="Enter degree"
              isRequired={true}
              onChange={e =>
                setEducation({ ...education, degree: e.target.value })
              }
              value={education.degree}
              error={
                props.error && props.error.degree ? props.error.degree : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Field Of Study"
              placeholder="Enter the field in which you've got the degree"
              isRequired={true}
              onChange={e =>
                setEducation({ ...education, fieldofstudy: e.target.value })
              }
              value={education.fieldofstudy}
              error={
                props.error && props.error.fieldofstudy
                  ? props.error.fieldofstudy
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
                  setEducation({ ...education, from: e.target.value })
                }
                value={String(education.from)}
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
                isDisabled={education.current}
                isRequired={false}
                onChange={e =>
                  setEducation({ ...education, to: e.target.value })
                }
                value={String(education.to)}
                error={props.error && props.error.to ? props.error.to : null}
              />
            </Flex>
            <Checkbox
              mx="1rem"
              my="0.25rem"
              borderColor="#007a5b"
              onChange={e => {
                setEducation({
                  ...education,
                  current: !education.current,
                });
              }}
              defaultIsChecked={education.current}
              value={education.current}
              _focus={{ outline: 'none' }}>
              <Text fontSize="1.1rem" fontWeight="500" color="#007a5b">
                Currently doing your degree.
              </Text>
            </Checkbox>

            <InputTextArea
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Description"
              placeholder="Tell us about yourself"
              onChange={e =>
                setEducation({ ...education, description: e.target.value })
              }
              value={education.description}
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
              Add Education Info
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

export default connect(mapStateToProps, { postEducation })(educationForm);
