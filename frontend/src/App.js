import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Test from './components/Test/Test';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Route path="/">
          <Navigation />
        </Route>
      </header>

      <div className='App-body'>
        <Route path="/shops/:id">
          <Shop />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </div>
    </div>
  );
}

export default App;
