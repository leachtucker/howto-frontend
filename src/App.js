import logo from './assets/logo.svg';
import './App.css';

import Nav from './Nav';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="header-title">HowTo</h1>
      </header>
      <div className="view-container">
        <Nav />
        <PostList posts={['s', 's']}/>
      </div>
    </div>
  );
}

export default App;
