import {
  Box,
  HStack,
  Image,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton as ChakraIconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import IconButton from '../buttons/IconButton';

const links = [
  {
    path: '/About',
    child: 'About',
    color: 'paragraph200',
  },
  {
    path: '/Charities',
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HStack
        as={'header'}
        align={'center'}
        h={'10vh'}
        justify={'space-between'}
        p={'1.5rem'}
        backgroundColor={'siteBackground'}
      >
        <Box>
          <Link href="/" passHref>
            <ChakraLink>
              <Image src="../logo.svg" alt="Logo" h={{ base: 16, md: 24 }} />
            </ChakraLink>
          </Link>
        </Box>
        <HStack
          as="nav"
          spacing={'8'}
          display={{ base: 'none', sm: 'none', md: 'revert' }}
        >
          {links.map((link) => (
            <NavLink key={link.path} href={link.path} color={link.color}>
              {link.child}
            </NavLink>
          ))}
        </HStack>
        <ChakraIconButton
          icon={<HamburgerIcon />}
          backgroundColor={'siteBackground'}
          display={{ md: 'none', lg: 'none' }}
          ref={btnRef}
          onClick={onOpen}
        />
      </HStack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack align="center" justify="center" pt={'40'} spacing={8}>
              {links.map((link) => (
                <NavLink color={link.color} href={link.path} key={link.child}>
                  {link.child}
                </NavLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
