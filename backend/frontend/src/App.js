import logo from './logo.svg';
import LoginFormPage from './components/session/LoginFormPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginFormPage />
      </header>
      <div className='App-body'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
