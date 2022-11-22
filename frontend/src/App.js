import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Test from './components/Test/Test';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Splash from './components/Splash/Splash';
import Cart from './components/Cart/Cart';
import Search from './components/Search/Search';


function App() {
  return (
    <div id="App" className="App">

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
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route>
        <Route exact path="/">
          <Splash />
        </Route>
      </div>
    </div>
  );
}

export default App;
