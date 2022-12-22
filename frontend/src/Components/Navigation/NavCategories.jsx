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
        <span className="nav-category">
            Top Selling Shops
            <Dropdown items = {topSellers} />
        </span>
        <span className="nav-category">
            Highest Rated Shops
            <Dropdown items = {topRated} />
        </span>
        <span className="nav-category">
            Durable Items
            <Dropdown items = {durables} />
        </span>
        <span className="nav-category">
            Something Silky
            <Dropdown items = {silks} />
        </span>
        <span className="nav-category">
            Awesome Names
            <Dropdown items = {awesomes} />
        </span>
        <span className="nav-category">
            Great Wallets
            <Dropdown items = {wallets} />
        </span>
      </div>
    )
}

export default NavCategories;