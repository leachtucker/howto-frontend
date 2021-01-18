import logo from './assets/logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css'

import Nav from './Nav';
import Post from './Post';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="header-title">HowTo</h1>
      </header>
      <div className="view-container">
        <Nav />
        <div className="post-list">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
