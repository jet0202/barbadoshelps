import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';

const DropDown = () => {
  return (
    <Menu zIndex={999}>
      <MenuButton
        as={Button}
        rightIcon={<Image src="../icons/chevronDown.svg" alt="" h={'8'} />}
        backgroundColor={'brand100'}
        border={'1px solid brand400'}
        color={'white'}
        borderRadius={'70px'}
        py={'6'}
        width={{ base: '70%', md: '15%' }}
      >
        Find a Charity
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropDown;
