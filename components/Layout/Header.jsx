import {
  Box,
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
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
            <NavLink key={link.path} color={link.color}>
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
      {/* <Flex
        as="header"
        backgroundColor="siteBackground"
        h={'140px'}
        pl={'3rem'}
        pr={'3rem'}
        justify="space-between"
      >
        <Box>
          <Link href="/" passHref>
            <ChakraLink>
              <Image src="../logo.svg" alt="Logo" h={'8rem'} />
            </ChakraLink>
          </Link>
        </Box>
        <HStack as="nav" spacing={'8'}>
          {links.map((link) => (
            <Box
              key={link.path}
              visibility={{ base: 'hidden', sm: 'hidden', md: 'visible' }}
            >
              <NavLink color={link.color}>{link.child}</NavLink>
            </Box>
          ))}

          <ChakraIconButton
            icon={<HamburgerIcon />}
            backgroundColor={'siteBackground'}
            display={{ md: 'none', lg: 'none' }}
            ref={btnRef}
            onClick={onOpen}
          />
        </HStack>
      </Flex> */}
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
            <VStack align={'center'} justify={'center'}>
              {links.map((link) => (
                <NavLink color={link.color} key={link.child}>
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
