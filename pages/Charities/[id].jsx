import {
  Box,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import IconButton from '../../components/buttons/IconButton';
import DropDown from '../../components/DropDown';
import SearchBar from '../../components/SearchBar';

import { charities } from '../../charityData';
import { useEffect, useState } from 'react';

const CharityPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [charity, setCharity] = useState();

  useEffect(() => {
    const data = charities;
    const record = data.find((charity) => charity.id === parseInt(id));
    // console.log(record);
    // if (record == null) {
    //   console.log('record is null');
    // }
    setCharity(record);
  }, [id]);

  //   if (charity == null) {
  //     return (
  //       <Flex align={'center'} justify={'center'} h={'90vh'}>
  //         <Heading as={'h1'} color={'brand200'} size={'3xl'}>
  //           Charity not found
  //         </Heading>
  //       </Flex>
  //     );
  //   }

  if (!charity) {
    return (
      <Flex align={'center'} justify={'center'} h={'90vh'}>
        <Heading as={'h1'} color={'brand200'} size={'3xl'}>
          <Spinner />
        </Heading>
      </Flex>
    );
  }
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'space-around'}
        h={'50vh'}
        py={{ base: '8', md: '14' }}
        px={{ base: '8', md: '24' }}
        bgColor={'siteBackground2'}
      >
        <VStack
          align={{ base: 'center', md: 'left' }}
          maxW={{ base: '90%', md: '15%' }}
        >
          <Heading
            color={'brand200'}
            textAlign={{ base: 'center', md: 'revert' }}
          >
            {charity?.name}
          </Heading>
          <Box maxW={'70%'}>
            <IconButton>Help Now</IconButton>
          </Box>
        </VStack>
        <Image
          src={charity?.image[0]}
          alt="charity"
          borderRadius={'20px'}
          h={'100%'}
          w={{ base: '100%', md: '40%' }}
          objectFit={'cover'}
        />
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        h={{ base: 'auto', md: '50vh' }}
      >
        <VStack
          w={{ base: '100%', md: '20%' }}
          py={{ base: 4, md: 20 }}
          h={'100%'}
          justify={'center'}
          spacing={4}
        >
          <Image src={charity?.logo} alt="charity logo" h={'40'} />
          <VStack>
            <Text
              color={'brand100'}
              casing={'uppercase'}
              fontSize={'xs'}
              letterSpacing={'widest'}
              fontWeight={'bold'}
            >
              Registered Name
            </Text>
            <Text
              color={'paragraph400'}
              fontWeight={'light'}
              fontSize={'x-small'}
            >
              {charity?.name}
            </Text>
          </VStack>
          <VStack>
            <Text
              color={'brand100'}
              casing={'uppercase'}
              fontSize={'xs'}
              letterSpacing={'widest'}
              fontWeight={'bold'}
            >
              Business #
            </Text>
            <Text
              color={'paragraph400'}
              fontWeight={'light'}
              fontSize={'x-small'}
            >
              {charity?.business_number}
            </Text>
          </VStack>
          <VStack>
            <Text
              color={'brand100'}
              casing={'uppercase'}
              fontSize={'xs'}
              letterSpacing={'widest'}
              fontWeight={'bold'}
            >
              Website
            </Text>
            <Text
              color={'paragraph400'}
              fontWeight={'light'}
              fontSize={'x-small'}
            >
              {charity?.website}
            </Text>
          </VStack>
        </VStack>
        <VStack
          w={{ base: '100%', md: '40%' }}
          align={'left'}
          justify={'center'}
          px={{ base: '4', md: '28' }}
          py={{ base: '6', md: 'revert' }}
          h={'100%'}
        >
          <Heading size={'xl'} color={'brand100'}>
            Our Mission
          </Heading>
          <Text color={'paragraph400'} fontSize={'sm'}>
            {charity?.mission}
          </Text>
        </VStack>
        <VStack
          w={{ base: '100%', md: '40%' }}
          align={'left'}
          justify={'center'}
          bgColor={'brand200'}
          h={'100%'}
          px={{ base: '4', md: '28' }}
          py={{ base: '6', md: 'revert' }}
        >
          <Heading size={'xl'} color={'white'}>
            About Us
          </Heading>
          <Text fontSize={'sm'} color={'whiteAlpha.600'}>
            {charity?.about_us}
          </Text>
        </VStack>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'center'}
        width={'100%'}
        h={'20vh'}
        backgroundColor={'siteBackground2'}
      >
        <DropDown />
        <SearchBar />
      </Stack>
    </>
  );
};

export default CharityPage;
