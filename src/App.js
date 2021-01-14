import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">HowTo</h1>
      </header>
      <div className="view-container">
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Post</li>
            <li>Edit</li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
