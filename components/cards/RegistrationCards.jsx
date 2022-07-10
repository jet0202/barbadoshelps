import { Button, Heading, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const RegistrationCards = ({ title, description, path, color }) => {
  return (
    <VStack
      spacing={6}
      bgColor={color}
      borderRadius={'50px'}
      padding={8}
      w={'80'}
      h={'auto'}
    >
      <Heading as={'h4'} size={'sm'} color="white" textAlign={'left'}>
        {title}
      </Heading>
      <Text color={'white'}>{description}</Text>
      <Link href={path}>
        <Button bgColor={'white'} color={'brand200'} borderRadius={'50px'}>
          Learn More
        </Button>
      </Link>
    </VStack>
  );
};

export default RegistrationCards;
