import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const CharityCard = ({ name, image, summary }) => {
  return (
    <VStack
      spacing={8}
      borderRadius={'20px'}
      pb={6}
      boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
      textAlign={'center'}
      maxW={{ base: '100%', md: '90%' }}
      minH={{ base: '400px', md: '480px' }}
      bgColor={'white'}
    >
      <Image
        src={image}
        alt=""
        borderTopRadius={'20px'}
        h={{ base: 'auto', md: '45%' }}
        w={{ base: '100%', md: '100$' }}
        objectFit={'cover'}
      />
      <VStack px={6} spacing={6}>
        <Heading as={'h3'} size={'md'} color={'brand200'}>
          {name}
        </Heading>
        <Text color={'paragraph300'}>{summary}</Text>
      </VStack>
    </VStack>
  );
};

export default CharityCard;
