import React from 'react';
import { Button, Image } from '@chakra-ui/react';

const IconButton = ({ children, size }) => {
  return (
    <Button
      size={size}
      py={'20px'}
      pl={'20px'}
      pr={'6px'}
      backgroundColor="accent"
      color={'whiteAlpha.900'}
      borderRadius="40px"
      rightIcon={<Image src="../btnIcon.svg" alt="" h={'6'} />}
    >
      {children}
    </Button>
  );
};

export default IconButton;
