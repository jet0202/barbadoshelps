import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const AboutBanner = ({ title, description, button }) => {
  return (
    <VStack spacing={'6'}>
      <Heading as={'h3'} color={'brand200'} size={'lg'}>
        {title}
      </Heading>
      <Text textAlign={'center'} maxW={'40%'}>
        {description}
      </Text>
      <Button color={'white'} bgColor={'brand100'} borderRadius={'40px'}>
        {button}
      </Button>
    </VStack>
  );
};

const About = () => {
  return (
    <>
      {/* About us */}
      <HStack
        minH={'90vh'}
        flexDirection={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={{ base: 'space-around' }}
        pl={{ base: '8', md: '24' }}
        pr={{ base: '8', md: '44' }}
      >
        <Box w={'50%'}>
          <Image src="../girl.png" alt="little girl" />
        </Box>
        <Box width={{ base: '100%', md: '40%' }}>
          <Heading size={'3xl'} color={'brand200'} mb={{ base: '10' }}>
            About Us
          </Heading>
          <Text color={'accent'} mb={{ base: '6' }}>
            <Box as="span" fontWeight={'bold'} fontSize={'xl'}>
              BarbadosHelps
            </Box>{' '}
            is a non-profit,self-funded, registered charity serving Barbadian
            charities and donors
          </Text>
          <Text
            color={'paragraph400'}
            mb={{ base: '6' }}
            fontSize={'sm'}
            lineHeight={'6'}
          >
            Our objective is to increase charitable giving by making it easier
            to donate and fundraise online whether you live in Barbados or are a
            member of the Barbadian Diaspora in far-flung countries.
          </Text>

          <Text
            color={'paragraph400'}
            mb={{ base: '6' }}
            fontSize={'sm'}
            lineHeight={'6'}
          >
            For charities, we provide simple open access to our affordable,
            online fundraising platform. Because we also are a charity, our fees
            are a fraction of those that can be charged for-profit alternatives.
          </Text>
          <Text
            color={'paragraph400'}
            mb={{ base: '6' }}
            fontSize={'sm'}
            lineHeight={'6'}
          >
            For donors, we offer a one-stop process for donating or fundraising
            for any registered and approved Barbadian charity. We pass on as
            much as possible of every dollar collected therefore your donation
            dollars go further when you Give from the Heart, Give a Hand using
            BarbadosHelps.
          </Text>
        </Box>
      </HStack>
      {/* How to help */}
      <HStack
        backgroundColor={'siteBackground2'}
        minH={'70vh'}
        flexDirection={{ base: 'column', md: 'row-reverse' }}
        align={'center'}
        justify={{ base: 'space-around' }}
        pl={{ base: '8', md: '24' }}
        pr={{ base: '8', md: '44' }}
      >
        <Box w={'50%'}>
          <Image src="../dog.png" alt="little girl" />
        </Box>
        <Box width={{ base: '100%', md: '40%' }}>
          <Heading size={'3xl'} color={'brand200'} mb={{ base: '10' }}>
            How to Help
          </Heading>
          <Text color={'accent'} mb={{ base: '6' }}>
            <Box as="span" fontWeight={'bold'} fontSize={'xl'}>
              BarbadosHelps
            </Box>{' '}
            makes giving easy and simple
          </Text>
          <Text
            color={'paragraph400'}
            mb={{ base: '6' }}
            fontSize={'sm'}
            lineHeight={'6'}
          >
            Whether you live on the island or &apos;over in away&apos;, we are a
            one-stop site where you can donate to your favourite charity or to a
            fundraising effort you wish to support.
          </Text>
          <Button
            color={'white'}
            bgColor={'brand100'}
            borderRadius="40px"
            fontWeight={'light'}
          >
            Explore Ways to Give
          </Button>
        </Box>
      </HStack>
      <HStack
        minH={'70vh'}
        flexDirection={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={{ base: 'space-around' }}
        pl={{ base: '8', md: '24' }}
        pr={{ base: '8', md: '44' }}
        py={{ base: '8', md: '24' }}
      >
        <Box w={'50%'}>
          <Image src="../Team.png" alt="Team" />
        </Box>
        <Box width={{ base: '100%', md: '40%' }}>
          <Heading size={'3xl'} color={'brand200'} mb={{ base: '10' }}>
            Our Team
          </Heading>
          <Text color={'accent'} mb={{ base: '6' }} fontSize={'xl'}>
            Support Us and keep the charitable sector strong
          </Text>
          <Text
            color={'paragraph400'}
            mb={{ base: '6' }}
            fontSize={'sm'}
            lineHeight={'6'}
          >
            We are a Barbadian charity which advocates for all registered,
            approved charities and worthy causes in Barbados. We provide the
            technology that creates easy and affordable ways for donations to
            those charities and causes to be made online. And we are a group of
            people who work hard to realize our mission to increase charitable
            giving both at home in Barbados and where ever in the world you find
            members of the Barbadian diaspora.
          </Text>
          <Text
            color={'paragraph400'}
            mb={{ base: '6' }}
            fontSize={'sm'}
            lineHeight={'6'}
          >
            Our Board of Directors, drawn from both the public and private
            sectors, through the years have provided their expertise and
            guidance to many charitable organizations and causes. They serve as
            volunteers because they believe in our mission and our purpose.
            We’re deeply indebted to their support and the invaluable gifts of
            their time and knowledge.further when you Give from the Heart, Give
            a Hand using BarbadosHelps.
          </Text>
          <Button
            color={'white'}
            bgColor={'brand100'}
            borderRadius="40px"
            fontWeight={'light'}
          >
            Learn More
          </Button>
        </Box>
      </HStack>
      <Box bgColor={'siteBackground2'} py={{ base: '20', md: '40' }} px={'24'}>
        <SimpleGrid columns={[1, null, 3]} spacing={'8'}>
          <AboutBanner
            title={'Fees'}
            description={'Were a self Funded registered charity'}
            button={'Learn More'}
          />
          <AboutBanner
            title={'Corporate Help'}
            description={
              'We make it easier for a company to support its favorite charity'
            }
            button={'Learn More'}
          />
          <AboutBanner
            title={'FAQ'}
            description={'Its up to youy to make your own success'}
            button={'View'}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default About;
