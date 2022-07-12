import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import IconButton from './buttons/IconButton';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box>
      <HStack
        backgroundColor={'siteBackground2'}
        pl={{ base: 4, md: 20 }}
        pr={{ base: 4, md: 28 }}
        h={'80vh'}
        alignItems={'center'}
        justifyContent={'space-between'}
        position={'relative'}
      >
        <Box
          position={{ base: 'absolute', md: 'revert' }}
          zIndex={'3'}
          maxW={{ md: '40%' }}
        >
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
          position={'relative'}
          top={{ base: '-40', md: 'revert' }}
          left={{ base: '60', md: '0' }}
        >
          <motion.div
            initial={{ opacity: 0, zIndex: 2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'anticipate' }}
          >
            <Image
              src="../hero/woman.png"
              alt="Older woman smiling"
              h={{ base: '36', md: '2xl' }}
              zIndex="1"
            />
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0, zIndex: 2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'anticipate' }}
          >
            <Image
              src="../hero/heroTag.svg"
              alt="Barbados Cancer Society"
              h={'24'}
              position={'absolute'}
              zIndex={'2'}
              bottom={'20'}
              display={{ base: 'none', md: 'block' }}
            />
          </motion.div>
        </Box>
        {/* <Image
          pos={'absolute'}
          zIndex="1"
          top={{ base: '158px', md: '230px' }}
          right={{ base: '40', md: '40px' }}
          src="../hero/woman.png"
          alt="Older woman smiling"
          h={{ base: '20', md: 'xl' }}
          overflow={'hidden'}
        />
        <motion.div
          initial={{ x: 300, opacity: 0, zIndex: 2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut', stiffness: 500 }}
        >
          <Image
            src="../hero/heroTag.svg"
            alt="Barbados Cancer Society"
            pos={'relative'}
            zIndex={'2'}
            h={'24'}
            display={{ base: 'none', md: 'block' }}
            top={{ md: '150px' }}
            left={'200px'}
          />
        </motion.div> */}
      </HStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        transform={'translateY(-50%)'}
      >
        <DropDown />
        <SearchBar />
      </Stack>
    </Box>
  );
};

export default Hero;
