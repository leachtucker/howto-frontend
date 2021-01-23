import logo from './assets/logo.svg';
import './App.css';

import {
  Box,
  Center,
  Stack,
  Image,
  Heading,
  Spacer,
  Text
} from '@chakra-ui/react';

import Nav from './Nav';
import Feed from './Feed';


function App(props) {
  return (
    <div className="App">
      <Center w="fit-content" height="250px" margin="0 auto">
        <Stack>
          <Image src={logo} alt="Logo"/>
          <Spacer />
          <Heading as="h1" size="3xl" fontWeight="300" color="white">HowTo</Heading>
        </Stack>
      </Center>
      <Box color="text.400" bgColor="white" boxShadow="lg" width="90%" maxWidth="1350px" margin="0 auto" borderRadius="7px" paddingBottom="10px">
        <Nav />
        <Feed />
      </Box>
      <Center color="white" height="100px">
          <Text marginTop="10px">© HowTo</Text>
      </Center>
    </div>
  );
}

export default App;
