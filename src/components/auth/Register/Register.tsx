import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {useSignup} from '../../../hooks/useSignup'

const Register: React.FC = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [gender, setGender] = useState("")
  const [accountCreationDate, setAccountCreationDate] = useState("")
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await signup(firstName,lastName,email,password,phoneNumber,gender,accountCreationDate)
  }
  return (
    // <Flex
    //   minH={'100vh'}
    //   align={'center'}
    //   justify={'center'}
    //   bg={useColorModeValue('gray.50', 'gray.800')}>
    //   <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    //     <Stack align={'center'}>
    //       <Heading fontSize={'4xl'} textAlign={'center'}>
    //         Sign up
    //       </Heading>
    //       <Text fontSize={'lg'} color={'gray.600'}>
    //         to enjoy all of our cool features ✌️
    //       </Text>
    //     </Stack>
    //     <Box
    //       rounded={'lg'}
    //       bg={useColorModeValue('white', 'gray.700')}
    //       boxShadow={'lg'}
    //       p={8}>
    //       <Stack spacing={4}>
    //         <Box as='form' onSubmit={handleSubmit}>

    //           {/* firstname, lastname */}
    //           <HStack>
    //             <Box>
    //               <FormControl id="firstName" isRequired>
    //                 <FormLabel>First Name</FormLabel>
    //                 <Input 
    //                 type="text" 
    //                 onChange={e => setFirstName(e.target.value)} 
    //                 value={firstName}
    //                 />
    //               </FormControl>
    //             </Box>

    //             <Box>
    //               <FormControl id="lastName">
    //                 <FormLabel>Last Name</FormLabel>
    //                 <Input 
    //                 type="text" 
    //                 onChange={e => setLastName(e.target.value)} 
    //                 value={lastName}
    //                 />
    //               </FormControl>
    //             </Box>
    //           </HStack>

    //           {/* phone no, gender , accountCreationDate */}
    //           <HStack>
    //             <Box>
    //               <FormControl id="phoneNumber" isRequired>
    //                 <FormLabel>Phone no</FormLabel>
    //                 <Input 
    //                   type="text" 
    //                   onChange={e => setPhoneNumber(e.target.value)} 
    //                   value={phoneNumber}
    //                   />
    //               </FormControl>
    //             </Box>

    //             <Box>
    //               <FormControl id="gender">
    //                 <FormLabel>Gender</FormLabel>
    //                 <Input 
    //                 type="text" 
    //                 onChange={e => setGender(e.target.value)} 
    //                 value={gender}
    //                 />
    //               </FormControl>
    //             </Box>
                
    //             <Box>
    //               <FormControl id="accountCreationDate">
    //                 <FormLabel>Account created</FormLabel>
    //                 <Input 
    //                 type="text" 
    //                 onChange={e => setAccountCreationDate(e.target.value)} 
    //                 value={accountCreationDate}
    //                 />
    //               </FormControl>
    //             </Box>
    //           </HStack>

    //             {/* email */}
    //           <FormControl id="email" isRequired>
    //             <FormLabel>Email address</FormLabel>
    //             <Input 
    //               type="email" 
    //               onChange={e => setEmail(e.target.value)} 
    //               value={email}
    //              />
    //           </FormControl>

    //             {/* password */}
    //           <FormControl id="password" isRequired>
    //             <FormLabel>Password</FormLabel>
    //             <InputGroup>
    //               <Input 
    //                 type={showPassword ? 'text' : 'password'}
    //                 onChange={e => setPassword(e.target.value)} 
    //                 value={password} 
    //                 autoComplete="on"
    //                 />
    //               <InputRightElement h={'full'}>
    //                 <Button
    //                   variant={'ghost'}
    //                   onClick={() =>
    //                     setShowPassword((showPassword) => !showPassword)
    //                   }>
    //                   {showPassword ? <ViewIcon /> : <ViewOffIcon />}
    //                 </Button>
    //               </InputRightElement>
    //             </InputGroup>
    //           </FormControl>

    //             {/* submit button */}
    //               <Stack spacing={10} pt={2}>
    //                 <Button
    //                   disabled={isLoading}
    //                   loadingText="Submitting"
    //                   size="lg"
    //                   bg={'blue.400'}
    //                   color={'white'}
    //                   _hover={{
    //                     bg: 'blue.500',
    //                   }}>
    //                   Sign up
    //                 </Button>
    //               </Stack>
    //           {error && <div className="error">{error}</div>}
    //         </Box>
    //         <Stack pt={6}>
    //           <Text align={'center'}>
    //             Already a user? <Link color={'blue.400'} to="/login"> <Box as='span' color={"blue.400"}>Login</Box> </Link>
    //           </Text>
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>

    
  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} minH={'40vh'}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          to explore all amazing features ✌️
        </Text>
      </Stack>
      <Stack spacing={4}>
        <Box as='form' 
            minH={'40vh'}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            className="login"
            onSubmit={handleSubmit}>

        <Box as='h3' m={1}>Log In</Box>

     <label>First Name:</label>
     <input 
        type="text" 
        onChange={e => setFirstName(e.target.value)} 
        value={firstName}
        />
     
     <label>Last Name:</label>
     <input 
        type="text" 
        onChange={e => setLastName(e.target.value)} 
        value={lastName}
        />
     
     <label>Phone No:</label>
     <input 
        type="text" 
        onChange={e => setPhoneNumber(e.target.value)} 
        value={phoneNumber}
        />
     
     <label>Gender:</label>
     <input 
        type="text" 
        onChange={e => setGender(e.target.value)} 
        value={gender}
        />
     
     <label>Created At:</label>
     <input 
        type="text" 
        onChange={e => setAccountCreationDate(e.target.value)} 
        value={accountCreationDate}
        />
        
     <label>Email address:</label>
     <input 
       type="email" 
       onChange={e => setEmail(e.target.value)} 
       value={email} 
     />
     <label>Password:</label>
     <input 
       type="password" 
       onChange={e => setPassword(e.target.value)} 
       value={password} 
       autoComplete="on"
     />

     <button disabled={isLoading}>Sign up</button>
     {error && <div className="error">{error}</div>}
     </Box>
   </Stack>
   </Stack>
  );
}

export default Register