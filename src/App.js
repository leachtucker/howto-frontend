import logo from './assets/logo.svg';
import './App.css';

import {
  Box,
  Center,
  Stack,
  Image,
  Heading,
  Spacer
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
          <Heading as="h1" size="3xl" color="white" >HowTo</Heading>
        </Stack>
      </Center>
      <Box bgColor="white" width="90%" maxWidth="1400px" margin="0 auto" borderRadius="7px" paddingBottom="10px">
        <Nav />
        <Feed />
      </Box>
    </div>
  );
}

export default App;
