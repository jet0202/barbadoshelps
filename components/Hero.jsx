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
    <HStack backgroundColor={'siteBackground2'} pl={'100px'}>
      <VStack align={'flex-start'}>
        <Box>
          <Heading color={'brand200'} size={'4xl'} fontWeight="black">
            Give from <br />
            the Heart, <br />
            Give a Hand
          </Heading>
        </Box>
        <Box maxWidth={'657px'}>
          <Text color={'paragraph400'} lineHeight={'32px'}>
            Charities most often do not get any financial support from the
            government and therefore depend completely on the generosity of
            individual and corporate donors.{' '}
            <Box as={'span'} color={'brand200'} fontWeight={'extrabold'}>
              Find a charity to support today!
            </Box>
          </Text>
        </Box>

        <HStack>
          <IconButton>Help Now</IconButton>
          <Link href="/register">
            <Text>Register as a Donor</Text>
          </Link>
        </HStack>
      </VStack>
      <Box>
        <Image src={'../woman.jpg'} alt="" />
      </Box>
    </HStack>
  );
};

export default Hero;
