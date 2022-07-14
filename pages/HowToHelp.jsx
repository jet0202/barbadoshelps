import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import IconButton from '../components/buttons/IconButton';
import DropDown from '../components/DropDown';
import SearchBar from '../components/SearchBar';

const HowToHelp = () => {
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'center'}
        maxW={'100%'}
        px={6}
        py={8}
        spacing={20}
      >
        <Image src="../giving.png" alt="" h={{ base: 'xs', md: 'lg' }} />
        <VStack align={'left'} spacing={4} maxW={{ base: '98%', md: '30%' }}>
          <Heading size={'3xl'} color={'brand200'}>
            How to Help
          </Heading>
          <Text color={'accent'} fontSize={'xl'} fontWeight={'medium'}>
            In just a few minutes, you will make a difference by supporting any
            Barbadian charity or fundraising cause registered on this site.
          </Text>
          <Text color={'paragraph400'} fontSize={'sm'} fontWeight={'thin'}>
            Just click on the HELP NOW button below, search by charity keyword
            or category, or fundraising keyword, and you will be re-directed to
            the appropriate page. Follow the easy steps set out there and you
            can make the donation that fits your needs. Pay for your donation
            either using your Credit Card or your PayPal account. Donate once,
            or schedule monthly donations to your charity to help both you and
            the charity plan ahead.
          </Text>
        </VStack>
      </Stack>
      <Box px={{ base: '8', md: '24' }} mb={'32'}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align={'center'}
          justify={'center'}
          maxW={'100%'}
        >
          <VStack
            align={'left'}
            bgColor={'brand100'}
            borderRadius={'50px'}
            px={10}
            py={'8'}
            color={'white'}
            maxW={{ base: '98%', md: '30%' }}
          >
            <Heading size={'lg'}>Credit Card</Heading>
            <Text lineHeight={'6'} fontSize={'sm'} fontWeight={'light'}>
              Pay for your donation with your Credit Card. {''}
              <Box as="span" fontWeight={'bold'}>
                BarbadosHelps
              </Box>{' '}
              complies with the Payment Card Industry Data Security Standards
              (PCI DSS) which means we ensure that the security of our payment
              processes is always up to date. We don&apos;t store your credit
              card information on our servers but can recall your encrypted
              information to save you time when you return to donate. We will
              never share your personal information with any charity unless you
              ask us to and then only if that charity has signed our privacy
              agreement. If you wish a more detailed explanation, please go to
              our Privacy Policy.
            </Text>
          </VStack>
          <VStack
            align={'left'}
            bgColor={'accent'}
            borderRadius={'50px'}
            px={'10'}
            py={'8'}
            color={'white'}
            h={{ base: 'auto', md: '330px' }}
            maxW={{ base: '98%', md: '30%' }}
          >
            <Heading size={'lg'}>PayPal</Heading>
            <Text lineHeight={'6'} fontWeight={'light'} fontSize={'sm'}>
              PayPal is an online financial service that allows you to pay for
              items using a secure internet account.
            </Text>
            <Box marginBottom={'20'} />
            <Text lineHeight={'6'} fontWeight={'light'} fontSize={'sm'}>
              Alternatively, you can transfer the money to one of your assigned
              bank accounts or cards.
            </Text>
            <Box marginBottom={'20'} />
            <Text lineHeight={'6'} fontWeight={'light'} fontSize={'sm'}>
              There can be fee applied when you receive money to your PayPal
              account. For example, if you sell an item on eBay
            </Text>
          </VStack>
        </Stack>
      </Box>
      <VStack
        bgColor={'siteBackground2'}
        py={{ base: '6', md: '32' }}
        spacing={'12'}
      >
        <Text
          textAlign={'center'}
          fontSize={'xs'}
          maxW={{ md: '40%' }}
          lineHeight={'6'}
          color={'paragraph400'}
          fontWeight={'light'}
        >
          If the system recognizes your payment address information as being in
          Barbados, you will immediately receive a tax receipt by email. At the
          same time, the charity will receive notification of your donation. If
          you have created a BarbadosHelps account, your tax receipts and
          favourite charities will be stored there. Then they are always
          available when you need to access them.
        </Text>
        <Text textAlign={'center'} fontSize={'sm'} fontWeight={'bold'}>
          The first step is to find your charity, so let&apos;s get started
        </Text>
        <IconButton>Help Now</IconButton>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align={'center'}
          justify={'center'}
          width={'100%'}
        >
          <DropDown />
          <SearchBar />
        </Stack>
      </VStack>
    </>
  );
};

export default HowToHelp;
