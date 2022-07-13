import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import CharityCard from '../../components/cards/CharityCard';
import React from 'react';
import { charities } from '../../charityData';
import IconButton from '../../components/buttons/IconButton';

const Charities = () => {
  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        h={'auto'}
        py={{ base: '8', md: '14' }}
      >
        <Heading size={'3xl'} color={'brand200'}>
          Charities
        </Heading>
      </Flex>
      <Flex
        bgColor={'siteBackground2'}
        py={'28'}
        px={{ base: '10', md: '64' }}
        flexDir={'column'}
        alignItems={'center'}
      >
        <SimpleGrid
          columns={[1, 1, 3]}
          spacing={'10'}
          mx={{ md: '28' }}
          mb={'20'}
        >
          {charities.map((charity) => (
            <VStack key={charity.name} spacing={8}>
              <CharityCard
                name={charity.name}
                image={charity.image[0]}
                summary={charity.summary}
              />
              <HStack spacing={4}>
                <IconButton size={'xs'}>Help Now</IconButton>
                <Link
                  color={'brand300'}
                  fontWeight={'medium'}
                  href={'/Charities/' + charity.id}
                >
                  Learn More
                </Link>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
        <Button
          bgColor={'brand100'}
          color={'white'}
          borderRadius={'40px'}
          fontWeight={'light'}
          maxW={{ base: '50%', md: '10%' }}
        >
          More Charities
        </Button>
      </Flex>
    </>
  );
};

export default Charities;
