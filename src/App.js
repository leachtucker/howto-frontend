import logo from './assets/logo.svg';
import './App.css';

import {
  Box,
  Center,
  Flex,
  Image,
  Heading,
  Text
} from '@chakra-ui/react';

import Nav from './components/Nav';
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import Signup from './pages/Signup';
import Login from './pages/Login';

import fetchTokenLocal from './utils/fetchTokenLocal';

function App(props) {
  return (
    <div className="App">
      <Center w="fit-content" height="250px" margin="0 auto" marginBottom="30px">
        <Flex flexDirection="column" alignItems="center" >
          <Image src={logo} alt="Logo" boxSize="125px" marginBottom="20px" />
          <Heading as="h1" size="3xl" fontWeight="300" color="white">HowTo</Heading>
        </Flex>
      </Center>
      <Box color="text.400" bgColor="white" boxShadow="lg" width="90%" maxWidth="1350px" margin="0 auto" borderRadius="7px !important" paddingBottom="10px">
        {fetchTokenLocal() &&
          <Nav />
        }
        <Login />
        {/* <Feed /> */}
        {/* <NewPost /> */}
        {/* <Signup /> */}
        {/* <NewPost /> */}
      </Box>
      <Center color="white" height="100px">
          <Text marginTop="10px">© HowTo</Text>
      </Center>
    </div>
  );
}

export default App;
