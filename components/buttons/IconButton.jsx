import React from 'react';
import { Button, Image } from '@chakra-ui/react';

const IconButton = ({ children }) => {
  return (
    <Button
      pt={'27px'}
      pb={'27px'}
      pl={'20px'}
      pr={'18px'}
      backgroundColor="accent"
      color={'whiteAlpha.900'}
      borderRadius="40px"
      rightIcon={<Image src="../btnIcon.svg" alt="" />}
    >
      {children}
    </Button>
  );
};

export default IconButton;
