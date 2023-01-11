import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue, InputGroup, InputRightElement, useBoolean, IconButton } from '@chakra-ui/react';
import ApplicationLogo from '../Components/ApplicationLogo';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useBoolean();

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={6} mx={'auto'} maxW="lg" w="full" py={12} px={6}>
        <Stack align={'center'}>
          <ApplicationLogo maxW="20" mb="3" />
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text> */}
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement>
                  <IconButton onClick={setShowPassword.toggle} _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} bg={'transparent'} icon={showPassword ? <ViewIcon /> : <ViewOffIcon />} />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <RouterLink to={'/home'}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </RouterLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
