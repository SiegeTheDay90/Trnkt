import logo from './logo.svg';
import SessionForm from './components/session/SessionForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SessionForm />
      </header>
      <body className='App-body'>
        <img src={logo} className="App-logo" alt="logo" />
      </body>
    </div>
  );
}

export default App;
