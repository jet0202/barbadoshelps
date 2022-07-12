import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const OurTeam = () => {
  return (
    <Box px={{ base: '4', md: '24' }} py={{ base: '10', md: '28' }}>
      {/* Our team introduction */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'space-between'}
        spacing={{ base: '6', md: '0' }}
        mb={{ base: '16', md: '28' }}
      >
        <Box maxW={{ base: '80%', md: '25%' }}>
          <Heading as={'h2'} size={'2xl'} color={'brand200'}>
            Our Team <br />
            /Trustees
          </Heading>
        </Box>
        <Box maxW={{ base: '80%', md: '75%' }}>
          <Text
            color={'paragraph400'}
            maxW={{ base: '100%', md: '60%' }}
            fontSize={''}
            lineHeight={'8'}
          >
            We are a small, enthusiastic group with a wide range of skills and
            experiences. We are all dedicated to improving the fund raising
            capabilities of all registered and qualified Barbadian charities by
            making it easier for you to donate online whether you live in
            Barbados, are a member of the far-flung Barbadian Diaspora or are a
            world wide friend of Barbados
          </Text>
        </Box>
      </Stack>

      {/* Aspire */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'space-evenly'}
        spacing={{ base: '6', md: '-20' }}
        mx={{ base: '0', md: '10' }}
        mb={{ base: '16', md: '24' }}
      >
        <Box position={'relative'}>
          <Image
            src="../team/Aspire.jpg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            zIndex={'10'}
          />
          <Image
            src="../team/imagebg.svg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            position={'absolute'}
            zIndex={'-1'}
            top={'5%'}
            right={'20px'}
          />
        </Box>
        <VStack align={'left'}>
          <Heading as={'h3'} color={'brand200'}>
            Aspire Barbados
          </Heading>
          <Text
            color={'accent'}
            casing={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'sm'}
            letterSpacing={'4px'}
          >
            Advisor
          </Text>
          <br />
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            Founded in 2015 to Help Charities Help, ASPIRE Foundation (Barbados)
            Inc. is a local non-profit working to build up the civic sector and
            non-profits that change lives. ASPIRE is a member of the Barbados
            NGO Major Group, the WINGS philanthropic network (Worldwide
            Initiatives for Grantmaker Support) and the Caribbean Philanthropy
            Alliance (CPA). To learn more, visit{' '}
            <Link
              href="www.aspirebarbados.org"
              color={'brand100'}
              lineHeight={'8'}
            >
              www.aspirebarbados.org
            </Link>
            .
          </Text>
        </VStack>
      </Stack>

      {/* Barbara */}
      <Stack
        direction={{ base: 'column', md: 'row-reverse' }}
        align={'center'}
        justify={'space-evenly'}
        spacing={{ base: '6', md: '-20' }}
        mx={{ base: '0', md: '10' }}
        mb={{ base: '16', md: '24' }}
      >
        <Box position={'relative'}>
          <Image
            src="../team/Barbara.jpg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            zIndex={'10'}
          />
          <Image
            src="../team/imagebg.svg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            position={'absolute'}
            zIndex={'-1'}
            top={'5%'}
            left={'20px'}
          />
        </Box>
        <VStack align={'left'}>
          <HStack>
            <Heading as={'h3'} color={'brand200'} maxWidth={'100%'} dir={'row'}>
              Barbara Trieloff-Deane
            </Heading>
            <Box
              fontWeight={'light'}
              color={'brand200'}
              fontSize={'2xl'}
              alignContent={'center'}
            >
              | PhD, CFP, CIWM, FMA
            </Box>
          </HStack>
          <Text
            color={'accent'}
            casing={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'sm'}
            letterSpacing={'4px'}
          >
            Advisor
          </Text>
          <br />
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            Barbara is Principal of DoverWoods International, working with
            financial service firms to develop and implement their advice
            strategy and associated sales and advice effectiveness programs. She
            is on faculty with the Credit Union Association of Canada.
          </Text>
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            {' '}
            Barbara&apos;s philosophy is inspired by Nelson Mandela&apos;s
            words: ‘it&apos;s the difference we make in the lives of others that
            determines the significance of the life we lead.’
          </Text>
          <Button
            bgColor={'brand100'}
            color={'white'}
            borderRadius={'40px'}
            maxW={{ base: '40%', md: '18%' }}
          >
            Learn More
          </Button>
        </VStack>
      </Stack>

      {/* Jo Ann */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'space-evenly'}
        spacing={{ base: '6', md: '-20' }}
        mx={{ base: '0', md: '10' }}
        mb={{ base: '16', md: '24' }}
      >
        <Box position={'relative'}>
          <Image
            src="../team/Jo-Ann.jpg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            zIndex={'10'}
          />
          <Image
            src="../team/imagebg.svg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            position={'absolute'}
            zIndex={'-1'}
            top={'5%'}
            right={'20px'}
          />
        </Box>
        <VStack align={'left'}>
          <Heading as={'h3'} color={'brand200'}>
            Jo Ann Warren
          </Heading>
          <Text
            color={'accent'}
            casing={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'sm'}
            letterSpacing={'4px'}
          >
            Director, Founder
          </Text>
          <br />
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            Jo Ann had the idea but could not have made it reality without the
            unfailing and invaluable help and support of every member of this
            team. After a 40+ year career in advertising, marketing, events and
            promotions, Jo Ann is now mostly retired. Born and raised in
            Barbados, she has lived in Canada for 30 years, where she has been a
            volunteer with a number of organisations including The Curtain Club
            Community Theatre, The Kidney Foundation and Big Brothers Big
            Sisters of York on whose Board she served. Jo Ann is a graduate of
            Marquette University with an MA in Communication.
          </Text>
          <Button
            bgColor={'brand100'}
            color={'white'}
            borderRadius={'40px'}
            maxW={{ base: '40%', md: '18%' }}
          >
            Learn More
          </Button>
        </VStack>
      </Stack>

      {/* John */}
      <Stack
        direction={{ base: 'column', md: 'row-reverse' }}
        align={'center'}
        justify={'space-evenly'}
        spacing={{ base: '6', md: '-20' }}
        mx={{ base: '0', md: '10' }}
        mb={{ base: '16', md: '24' }}
      >
        <Box position={'relative'}>
          <Image
            src="../team/roett.jpg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            zIndex={'10'}
          />
          <Image
            src="../team/imagebg.svg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            position={'absolute'}
            zIndex={'-1'}
            top={'5%'}
            left={'20px'}
          />
        </Box>
        <VStack align={'left'}>
          <Heading as={'h3'} color={'brand200'}>
            John Roette
          </Heading>
          <Text
            color={'accent'}
            casing={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'sm'}
            letterSpacing={'4px'}
          >
            Director
          </Text>
          <br />
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            John is one of the most respected musicians in the Caribbean. A
            multi keyboardist by nature, John has spent the past forty-three
            years as a professional musician entertaining audiences across the
            globe with groups such as The Merrymen, Spice and Company, and
            international recording star Maxi Priest, for whom John was musical
            director during his world tour.
          </Text>
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            {' '}
            John is known for his unlimited willingness to share his experience
            with younger artistes, and his firm belief in the vital importance
            of passing knowledge from generation to generation.
          </Text>
          <Button
            bgColor={'brand100'}
            color={'white'}
            borderRadius={'40px'}
            maxW={{ base: '40%', md: '18%' }}
          >
            Learn More
          </Button>
        </VStack>
      </Stack>

      {/* Peter */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'space-evenly'}
        spacing={{ base: '6', md: '-20' }}
        mx={{ base: '0', md: '10' }}
        mb={{ base: '16', md: '24' }}
      >
        <Box position={'relative'}>
          <Image
            src="../team/Peter.jpg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            zIndex={'10'}
          />
          <Image
            src="../team/imagebg.svg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            position={'absolute'}
            zIndex={'-1'}
            top={'5%'}
            right={'20px'}
          />
        </Box>
        <VStack align={'left'}>
          <Heading as={'h3'} color={'brand200'}>
            Peter Boos
          </Heading>
          <Text
            color={'accent'}
            casing={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'sm'}
            letterSpacing={'4px'}
          >
            Benefactor
          </Text>
          <br />
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            Born in Trinidad in 1945, Peter Boos attended The Oratory School in
            Oxfordshire, England,1957-63. From 1963-69 Peter was a Trainee
            Chartered Accountant in London and qualified as a Chartered
            Accountant in 1969. He is a Fellow of the Institute of Chartered
            Accountants, England, and Wales.
          </Text>
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            {' '}
            Returning to the Caribbean, Peter was with Ernst &amp; Young (now
            EY) Caribbean based in Barbados from 1970-2004. He retired in July
            2004 as the Executive Chairman of EY Caribbean.
          </Text>
          <Button
            bgColor={'brand100'}
            color={'white'}
            borderRadius={'40px'}
            maxW={{ base: '40%', md: '18%' }}
          >
            Learn More
          </Button>
        </VStack>
      </Stack>

      {/* Kromium */}
      <Stack
        direction={{ base: 'column', md: 'row-reverse' }}
        align={'center'}
        justify={'space-evenly'}
        spacing={{ base: '6', md: '-20' }}
        mx={{ base: '0', md: '10' }}
        mb={{ base: '16', md: '24' }}
      >
        <Box position={'relative'}>
          <Image
            src="../team/kromium.jpg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            zIndex={'10'}
          />
          <Image
            src="../team/imagebg.svg"
            alt="Aspire graphic"
            h={{ md: '27rem' }}
            borderRadius={'20px'}
            position={'absolute'}
            zIndex={'-1'}
            top={'5%'}
            left={'20px'}
          />
        </Box>
        <VStack align={'left'}>
          <Heading as={'h3'} color={'brand200'}>
            Kromium Digital
          </Heading>
          <Text
            color={'accent'}
            casing={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'sm'}
            letterSpacing={'4px'}
          >
            Web Administrator &amp; Advisor
          </Text>
          <br />
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            Kromium Digital (KD), is a Barbadian-owned-and-operated Digital
            Marketing firm. Our young, talented, and extraordinary team ranges
            from graphic designers and web developers to photographers,
            videographers, and social media managers, many rated as some of the
            island’s best.
          </Text>
          <Text
            maxW={'3xl'}
            color={'paragraph400'}
            fontWeight={'light'}
            lineHeight={'8'}
          >
            {' '}
            Since its launch in January 2018, Kromium Digital has sought to
            provide affordable digital marketing solutions for businesses across
            the island and has even had the opportunity to serve the business
            sector regionally while attracting international prospects.
          </Text>
          <Button
            bgColor={'brand100'}
            color={'white'}
            borderRadius={'40px'}
            maxW={{ base: '40%', md: '18%' }}
          >
            Learn More
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default OurTeam;
