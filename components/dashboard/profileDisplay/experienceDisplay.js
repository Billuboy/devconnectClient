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
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { deleteExperience } from '../../../actions/profile';

function experienceDisplay(props) {
  const renderData = () => {
    return props.experience.map(record => {
      return (
        <Tr key={record._id}>
          <Td fontWeight="600" color="#00a37a">
            {record.title}
          </Td>
          <Td fontWeight="600" color="#00a37a">
            {record.company}
          </Td>
          <Td fontWeight="600" color="#00a37a">
            {record.location}
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
              onClick={() => props.deleteExperience(record._id)}
              _focus={{ outline: 'none' }}
            />
          </Td>
        </Tr>
      );
    });
  };
  return (
    <Flex justify="center">
      <Box w="90%" mb="3rem">
        <Heading
          fontWeight="700"
          fontSize="1.7rem"
          textAlign="center"
          mt="2rem"
          mb="1.5rem">
          Experience Info
        </Heading>
        <Table colorScheme="blue" bg="#E7FBFF">
          <Thead>
            <Tr>
              <Th fontWeight="900" color="#11698e">
                Title
              </Th>
              <Th fontWeight="900" color="#11698e">
                Company
              </Th>
              <Th fontWeight="900" color="#11698e">
                Location
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
  return { experience: state.profile.data.experience };
}

export default connect(mapStateToProps, { deleteExperience })(
  experienceDisplay
);
