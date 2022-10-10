import logo from './logo.svg';
import LoginFormPage from './components/session/LoginFormPage';
import SessionInfo from './components/session/SessionInfo';
import './App.css';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/">
          <SessionInfo />
        </Route>
      </Switch>
      </header>
      <div className='App-body'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
