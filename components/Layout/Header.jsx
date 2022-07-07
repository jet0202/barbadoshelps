import {
  Box,
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import IconButton from '../buttons/IconButton';

const links = [
  {
    path: '/',
    child: 'Home',
    color: 'paragraph200',
  },
  {
    path: '/charities',
    child: 'Charities',
    color: 'paragraph200',
  },
  {
    path: '/donors',
    child: 'Donors',
    color: 'paragraph200',
  },
  {
    path: '/help',
    child: <IconButton>Help Now</IconButton>,
    color: '#ffffff',
  },
  {
    path: '/login',
    child: 'Login',
    color: 'paragraph200',
  },
];

const NavLink = ({ children, href, color }) => {
  return (
    <ChakraLink href={href} color={color}>
      {children}
    </ChakraLink>
  );
};

const Header = () => {
  return (
    <Flex
      as="header"
      backgroundColor="siteBackground"
      h={'169px'}
      pl={'3rem'}
      pr={'3rem'}
      justify="space-between"
    >
      <Box>
        <Link href="/" passHref>
          <ChakraLink>
            <Image src="../logo.svg" alt="Logo" />
          </ChakraLink>
        </Link>
      </Box>
      <HStack as="nav" spacing={'8'}>
        {links.map((link) => (
          <NavLink color={link.color} key={link.path}>
            {link.child}
          </NavLink>
        ))}
      </HStack>
    </Flex>
  );
};

export default Header;
