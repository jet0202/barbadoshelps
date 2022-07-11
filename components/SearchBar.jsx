import {
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

const SearchBar = () => {
  return (
    <InputGroup maxW={{ base: '80%', md: '35%' }}>
      <InputRightElement>
        <Image
          src="../hero/searchIcon.svg"
          alt="search icon"
          h={'6'}
          mr={'6'}
          mt={'2'}
        />
      </InputRightElement>
      <Input
        placeholder="Search here..."
        _placeholder={{ color: 'white' }}
        color={'white'}
        backgroundColor="brand300"
        border={'1px solid brand400'}
        borderRadius={'70px'}
        py={'6'}
      />
    </InputGroup>
  );
};

export default SearchBar;
