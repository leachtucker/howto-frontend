import logo from './assets/logo.svg';
import './App.css';

// ROUTER
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// RTK
import { useSelector } from 'react-redux';

// UTILS
import fetchToken from './utils/fetchTokenLocal';

import {
  Box,
  Center,
  Flex,
  Image,
  Heading,
  Text
} from '@chakra-ui/react';

import Nav from './components/Nav';
import LoadingModal from './components/LoadingModal';

// PAGES //
import Signup from './pages/Signup';
import Login from './pages/Login';
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import Settings from './pages/Settings';


function App() {
  const { error, fetching } = useSelector(state => state.app);

  return (
    <div className="App">
      <Center w="fit-content" height="250px" margin="0 auto" marginBottom="30px">
        <Flex flexDirection="column" alignItems="center" >
          <Image src={logo} alt="Logo" boxSize="125px" marginBottom="20px" />
          <Heading as="h1" size="3xl" fontWeight="300" color="white">HowTo</Heading>
        </Flex>
      </Center>
      <Box color="text.400" bgColor="white" boxShadow="lg" width="90%" maxWidth="1350px" margin="0 auto" borderRadius="7px !important">
        {fetchToken() &&
          <Nav />
        }
        {fetching &&
          <LoadingModal />
        }
        <Switch>
          <Route path="/register" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Feed} />
          <PrivateRoute path="/newpost" exact component={NewPost} />
          <PrivateRoute path="/settings" exact component={Settings} />
          {/* Add Settings page & (maybe) a edit post page */}
        </Switch>
      </Box>
      <Center color="white" height="100px">
        <Text marginTop="10px">© HowTo</Text>
      </Center>
    </div>
  );
}

export default App;
