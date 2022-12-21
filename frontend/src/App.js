import { Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
import Splash from './Pages/Splash/Splash.jsx';
import Product from './Pages/Product/Product.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Search from './Pages/Search/Search.jsx';
import './App.css';


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
