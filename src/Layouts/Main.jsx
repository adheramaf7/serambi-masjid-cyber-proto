import { Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, Text, Container } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ApplicationLogo from '../Components/ApplicationLogo';
import { Outlet } from 'react-router-dom';

const Links = ['Dashboard', 'Pencarian Anggota', 'Data Center'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack direction="column" minH="100vh" bg="gray.50">
      <Box bg={'gray.700'} px={4} boxShadow="md">
        <Flex px={{ base: 4, md: 10 }} py={4} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={'center'}>
            <Box maxW="40px">
              <ApplicationLogo />
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>
                  <Text textColor="gray.300" _hover={{ textColor: 'gray.800' }}>
                    {link}
                  </Text>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Stack direction="row" align="center">
                  <Text textColor="gray.300" hidden={{ base: true, sm: false }}>
                    Mustajib
                  </Text>
                  <Avatar size={'sm'} src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'} />
                </Stack>
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Setting</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>
                  <Text textColor="gray.300" _hover={{ textColor: 'gray.800' }}>
                    {link}
                  </Text>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Flex py="3" grow="1">
        <Container maxW="8xl">
          <Outlet />
        </Container>
      </Flex>

      <Box mt="auto" bg={'gray.700'} color={'gray.300'} px="4" py="2" borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm">© 2023 Serambi Masjid Cyber. All rights reserved</Text>
      </Box>
    </Stack>
  );
}
