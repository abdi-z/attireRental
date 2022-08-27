import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Stack,
  SimpleGrid,
  StackDivider,
  Icon,
  Flex
} from '@chakra-ui/react';

import Signup from '../../../images/Working/SignUp.png'
import Step1 from '../../../images/Working/step1.png'
import Step2 from '../../../images/Working/step2.png'
import Step3 from '../../../images/Working/step3.png'

const Works = () => {
  return (
    <>
      
      <Container maxW={'5xl'} py={12}>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="5rem"
            color={useColorModeValue('red.500', 'orange.200')}>
        <Heading as="h1" fontSize="3rem" >How it Works ?</Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'red.400'}
            fontWeight={700}
            fontSize={'sm'}
            bg={useColorModeValue('red.100', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            STEP 1
          </Text>
          <Heading color={'red.400'}>Register your account and Log In</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            The first step is to Login to your account or if you dont have one, then register for an account.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              Signup
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>

    {/* 2nd */}
    
      <Container maxW={'5xl'} py={12}>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="5rem"
            color={useColorModeValue('blue.600', 'orange.200')}>
        <Heading as="h1" fontSize="3rem" >Location Details</Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              Step1
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
        <Text
            textTransform={'uppercase'}
            color={'blue.500'}
            fontWeight={700}
            fontSize={'sm'}
            bg={useColorModeValue('blue.100', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            STEP 2
          </Text>
          <Heading color={'blue.400'}>Select your State and Location</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            In the location details page, select your state/province and city (e.g. State: Punjab and City: Lahore)
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            
          </Stack>
        </Stack>
      
      </SimpleGrid>
    </Container>

      {/* 3rd */}

      <Container maxW={'5xl'} py={12}>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="5rem"
            color={useColorModeValue('yellow.600', 'orange.200')}>
        <Heading as="h1" fontSize="3rem" >Pricing Details</Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      
        <Stack spacing={4}>
        <Text
            textTransform={'uppercase'}
            color={'yellow.500'}
            fontWeight={700}
            fontSize={'sm'}
            bg={useColorModeValue('yellow.200', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            STEP 3
          </Text>
          <Heading color={'yellow.500'}>Enter Price Details</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            In price details page, enter the amount you want to rent your attire for, along with a security fee (refundable). Your upfront payment will be the sum of these amounts.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              Step2
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>

    {/* 4th */}
    
      <Container maxW={'5xl'} py={12}>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="5rem"
            color={useColorModeValue('green.600', 'orange.200')}>
        <Heading as="h1" fontSize="3rem" >Attire Details</Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              Step3
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
        <Text
            textTransform={'uppercase'}
            color={'green.600'}
            fontWeight={700}
            fontSize={'sm'}
            bg={useColorModeValue('green.200', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            FINALLY
          </Text>
          <Heading color={'green.500'}>Enter Attire Details</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Finally, enter the details of attire that you want to rent out. These details include a title, description, category and an image.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            
          </Stack>
        </Stack>
      
      </SimpleGrid>
    </Container>

      
      
    
    </>
  );
};

export default Works;
    // <Container maxW={'7xl'} p="12">
      // <Box display="flex" justifyContent="center" alignItems="center" margin="2"
      //       color={useColorModeValue('orange.600', 'orange.200')}>
      //   <Heading as="h1" fontSize="3rem" >How it Works ?</Heading>
      // </Box>

    //   <Tag size={'lg'} borderRadius="1rem" bgGradient="linear(to-r, orange.400, red.500, red.600)" padding="1rem" variant="solid" colorScheme="orange" >
    //         step1
    //       </Tag>
      
    //   <Box
    //     marginTop={{ base: '1', sm: '5' }}
    //     display="flex"
    //     flexDirection={{ base: 'column', sm: 'row' }}
    //     >
    //     <Box
    //       display="flex"
    //       flex="1"
    //       marginRight="3"
          
    //       alignItems="center">
    //       <Box
    //         minWidth={50}
      
    //         marginTop="5%">
    //         <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
    //           <Image
    //             borderRadius="sm"
    //             src='https://res.cloudinary.com/dfmxbcddb/image/upload/v1661068986/images/1661068967338.png'
    //             alt="some good alt text"
                
    //           />
    //         </Link>
    //       </Box>
    //       <Box zIndex="1" width="100%" position="absolute" height="100%">
    //         <Box
    //           bgGradient={useColorModeValue(
    //             'radial(orange.600 1px, transparent 1px)',
    //             'radial(orange.300 1px, transparent 1px)'
    //           )}
    //           backgroundSize="20px 20px"
    //           opacity="0.4"
    //           height="100%"
    //         />
    //       </Box>
    //     </Box>
    //     <Box
    //       display="flex"
    //       flex="1"
    //       flexDirection="column"
    //       justifyContent="center"
    //       marginTop={{ base: '3', sm: '0' }}>
          
    //       <Heading marginTop="1">
    //         <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
    //           Blog article title
    //         </Link>
    //       </Heading>
    //       <Text
    //         as="p"
    //         marginTop="2"
    //         color={useColorModeValue('gray.700', 'gray.200')}
    //         fontSize="lg">
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book.
    //       </Text>
    //     </Box>
    //   </Box>


    //   <Tag size={'lg'} borderRadius="1rem" bgGradient="linear(to-r, orange.400, red.500, red.600)" padding="1rem" variant="solid" colorScheme="orange" >
    //         step1
    //       </Tag>
    //   <Box
    //     marginTop={{ base: '1', sm: '5' }}
    //     display="flex"
    //     flexDirection={{ base: 'column', sm: 'row' }}
    //     >
    //     <Box
    //       display="flex"
    //       flex="1"
    //       marginRight="3"
          
    //       alignItems="center">
    //       <Box
    //         minWidth={50}
      
    //         marginTop="5%">
    //         <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
    //           <Image
    //             borderRadius="sm"
    //             src='https://res.cloudinary.com/dfmxbcddb/image/upload/v1661068986/images/1661068967338.png'
    //             alt="some good alt text"
                
    //           />
    //         </Link>
    //       </Box>
    //       <Box zIndex="1" width="100%" position="absolute" height="100%">
    //         <Box
    //           bgGradient={useColorModeValue(
    //             'radial(orange.600 1px, transparent 1px)',
    //             'radial(orange.300 1px, transparent 1px)'
    //           )}
    //           backgroundSize="20px 20px"
    //           opacity="0.4"
    //           height="100%"
    //         />
    //       </Box>
    //     </Box>
    //     <Box
    //       display="flex"
    //       flex="1"
    //       flexDirection="column"
    //       justifyContent="center"
    //       marginTop={{ base: '3', sm: '0' }}>
          
    //       <Heading marginTop="1">
    //         <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
    //           Blog article title
    //         </Link>
    //       </Heading>
    //       <Text
    //         as="p"
    //         marginTop="2"
    //         color={useColorModeValue('gray.700', 'gray.200')}
    //         fontSize="lg">
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book.
    //       </Text>
    //     </Box>
    //   </Box>
    // </Container>