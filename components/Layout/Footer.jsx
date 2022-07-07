import {
  Box,
  Center,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const links = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'How to Help',
    href: '/help',
  },
  {
    name: 'Charities',
    href: '/charities',
  },
  {
    name: 'Log in',
    href: '/login',
  },
  {
    name: 'Our Team',
    href: '/ourTeam',
  },
  {
    name: 'Corportate Help',
    href: '/coportateHelp',
  },
  {
    name: 'Donors',
    href: '/donors',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'Fees',
    href: '/fees',
  },
  {
    name: 'Register',
    href: '/Register',
  },
  {
    name: 'Terms & Conditions',
    href: '/TermsAndConditions',
  },
];

const socials = [
  {
    href: 'https://www.facebook.com/',
    icon: '../icons/fb.svg',
  },
  {
    href: 'https://www.twitter.com/',
    icon: '../icons/twitter.svg',
  },
  {
    href: 'https://www.instagram.com/',
    icon: '../icons/ig.svg',
  },
  {
    href: 'https://www.linkedin.com/',
    icon: '../icons/linkedin.svg',
  },
];

const GridItems = ({ href, name }) => {
  return (
    <Link color={'paragraph200'} href={href}>
      {name}
    </Link>
  );
};

const Footer = () => {
  return (
    <Box
      as="footer"
      pt={'65px'}
      pb={'65px'}
      backgroundColor={'siteBackground2'}
    >
      <HStack justify={'space-around'}>
        <SimpleGrid columns={4} spacing={8}>
          {links.map((link) => (
            <GridItems key={link.name} href={link.href} name={link.name} />
          ))}
        </SimpleGrid>
        <VStack maxW={'xl'}>
          <HStack>
            <HStack spacing={'42px'}>
              {socials.map((social) => (
                <Center key={social.href}>
                  <Link href={social.href}>
                    <Image height={6} w="6" src={social.icon} alt="" />
                  </Link>
                </Center>
              ))}
            </HStack>
            <Box>
              <Link href="/">
                <Image src="../logoGray.svg" alt="Logo" />
              </Link>
            </Box>
          </HStack>
          <Text color={'paragraph200'}>
            Barbados Helps Inc. is incorporated as a non-profit company pursuant
            to the Companies Act Cap. 308 of the laws of Barbados with company
            number 46183. 2022 ALL RIGHTS RESERVED BARBADOSHELPS.ORG
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
