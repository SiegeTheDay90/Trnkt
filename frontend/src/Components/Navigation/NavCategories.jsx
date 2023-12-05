import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import { fetchShops } from "../../store/shops";
import './styles/Navigation.css'
import './styles/NavCategories.css'
import Dropdown from "./Dropdown";

const NavCategories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShops());
        dispatch(fetchProducts([{num: 8, title:'Durable'}, {num: 8, title:'Silk'}, {num: 8, title:'Awesome'}, {num: 8, title:'Wallet'}]));
    }, []);

    const fetchedShops = useSelector(state => state.shops);
    const fetchedProducts = useSelector(state => state.products);
    const shops = Object.values(fetchedShops);
    const products = Object.values(fetchedProducts);
    shops.sort((a, b) => b.sales - a.sales);

    const topSellers = shops.slice(0,8);

    shops.sort((a, b) => b.rating - a.rating);

    const topRated = shops.slice(0,8);

    const durables = products.filter(product => product.name.includes('Durable'));
    const silks = products.filter(product => product.name.includes('Silk'));
    const awesomes = products.filter(product => product.name.includes('Awesome'));
    const wallets = products.filter(product => product.name.includes('Wallet'));



    if (!shops[0] || !products[0]) return null;
    return (
      <div className="navrow categories">
        <div tabIndex="4" className="nav-category">
            Top Selling Shops
        </div>
        <Dropdown items = {topSellers} />

        <div tabIndex="4" className="nav-category">
            Highest Rated Shops
        </div>
        <Dropdown items = {topRated} />

        <div tabIndex="4" className="nav-category">
            Durable Items
        </div>
        <Dropdown items = {durables} />

        <div tabIndex="4" className="nav-category">
            Something Silky
        </div>
        <Dropdown items = {silks} />

        <div tabIndex="4" className="nav-category">
            Awesome Names
        </div>
        <Dropdown items = {awesomes} />

        <div tabIndex="4" className="nav-category">
            Great Wallets
        </div>
        <Dropdown items = {wallets} />

      </div>
    )
}

export default NavCategories;