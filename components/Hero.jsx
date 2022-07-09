import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import IconButton from './buttons/IconButton';

const Hero = () => {
  return (
    <HStack
      pos={'relative'}
      backgroundColor={'siteBackground2'}
      pl={{ base: 4, md: 20 }}
      pr={{ base: 4, md: 20 }}
      h={'80vh'}
    >
      <Box position={'absolute'} zIndex={'2'}>
        <VStack align={'flex-start'} spacing={6}>
          <Heading as={'h1'} size={{ base: '4xl' }} color={'brand200'}>
            Give from <br />
            the Heart, <br />
            Give a Hand
          </Heading>
          <Text color={'paragraph400'}>
            Charities most often do not get any financial support from the
            government and therefore depend completely on the generosity of
            individual and corporate donors.{' '}
            <Box as="span" color={'brand200'} fontWeight={'bold'}>
              Find a charity to support today!
            </Box>
          </Text>
          <HStack>
            <IconButton>Help Now</IconButton>
            <Link href="/register">
              <Text color={'brand200'}>Register as a Donor</Text>
            </Link>
          </HStack>
        </VStack>
      </Box>
      <Box
        pos={'absolute'}
        zIndex="1"
        top={{ base: '158px', md: '40px' }}
        right={'20px'}
      >
        <Image
          src="../hero/woman.png"
          alt="Older woman smiling"
          h={{ base: 28, md: 'xl' }}
        />
      </Box>
    </HStack>
  );
};

export default Hero;
