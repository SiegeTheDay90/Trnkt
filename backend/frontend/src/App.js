import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">

      <header className="App-header">
      <Route path="/">
        <Navigation />
      </Route>

      </header>

      <div className='App-body'>

      </div>
    </div>
  );
}

export default App;
