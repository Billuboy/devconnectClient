import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  FormHelperText,
} from '@chakra-ui/react';

export const InputField = props => {
  return (
    <Box m={props.m}>
      <FormControl isRequired={props.isRequired} isInvalid={props.error}>
        <FormLabel fontSize={props.fontSize} mb={props.mb} color="#007a5b">
          {props.label}
        </FormLabel>
        <Input
          type={props.type}
          fontWeight="500"
          color="#11698e"
          isDisabled={props.isDisabled}
          placeholder={props.placeholder}
          autoComplete="off"
          onChange={props.onChange}
          value={props.value}
          borderColor="#00a37a"
          _hover={{ borderColor: '#00a37a' }}
        />
        <FormHelperText color="#007a5b">{props.helperText}</FormHelperText>
        <FormErrorMessage>{props.error}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};
