import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Center,
  Divider,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { deleteEducation } from '../../../actions/profile';

function educationDisplay(props) {
  const renderData = () => {
    return props.education.map(record => {
      return (
        <Tr key={record._id}>
          <Td fontWeight="600" color="#00a37a">
            {record.school}
          </Td>
          <Td fontWeight="600" color="#00a37a">
            {record.degree}
          </Td>
          <Td fontWeight="600" color="#00a37a">
            {record.fieldofstudy}
          </Td>
          <Td fontWeight="600" color="#00a37a">
            <Moment format="DD-MM-YYYY">{record.from}</Moment> -{' '}
            {record.current === true ? (
              'Now'
            ) : (
              <Moment format="DD-MM-YYYY">{record.to}</Moment>
            )}
          </Td>
          <Td>
            <IconButton
              variant="outline"
              color="red"
              icon={<i className="fas fa-trash"></i>}
              onClick={() => props.deleteEducation(record._id)}
              _focus={{ outline: 'none' }}
            />
          </Td>
        </Tr>
      );
    });
  };
  return (
    <Flex justify="center">
      <Center>
        <Divider orientation="horizontal" />
      </Center>
      <Box w="90%">
        <Heading
          fontWeight="700"
          fontSize="1.7rem"
          textAlign="center"
          mt="1.5rem"
          mb="1.5rem">
          Education Info
        </Heading>
        <Table colorScheme="blue">
          <Thead>
            <Tr>
              <Th fontWeight="900" color="#11698e">
                School/College
              </Th>
              <Th fontWeight="900" color="#11698e">
                Degree
              </Th>
              <Th fontWeight="900" color="#11698e">
                Field Of Study
              </Th>
              <Th fontWeight="900" color="#11698e">
                Year
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>{renderData()}</Tbody>
        </Table>
      </Box>
    </Flex>
  );
}

function mapStateToProps(state) {
  return { education: state.profile.data.education };
}

export default connect(mapStateToProps, { deleteEducation })(educationDisplay);
